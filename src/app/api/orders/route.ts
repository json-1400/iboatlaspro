import { NextRequest, NextResponse } from "next/server";
import { OrderSchema, OrderRecord } from "@/lib/schemas/order";
import {
  PLAN_CONFIGS,
  calculateExpirationDate,
  calculateOrderAmount,
} from "@/lib/subscriptions";
import { sendAdminNewOrderAlert } from "@/lib/notifications";
import { persistOrderToDatabase } from "@/lib/supabase/client";
import { checkRateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting (5 orders per 10 minutes)
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`order_${clientIp}`, {
      limit: 5,
      windowMs: 10 * 60 * 1000,
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Trop de tentatives de commande. Veuillez patienter quelques minutes.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate input
    const rawBody: unknown = await req.json();
    const parseResult = OrderSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Données de commande invalides",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const input = parseResult.data;

    // 3. Silent Anti-Bot Honeypot Rejection
    if (input.honeypot && input.honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Requête refusée." },
        { status: 400 }
      );
    }

    const plan = PLAN_CONFIGS[input.planId];
    const purchaseDate = new Date();
    const expirationDate = calculateExpirationDate(purchaseDate, input.planId);
    const calculatedAmount = calculateOrderAmount(input.planId, input.devicesCount);

    // Format operational notes (renewal & multi-screen)
    const operationalNotes = [
      input.notes,
      input.isRenewal && input.existingCode
        ? `[Renouvellement code existant: ${input.existingCode}]`
        : null,
      input.devicesCount > 1
        ? `[Pack multi-écrans: ${input.devicesCount} appareils]`
        : null,
    ]
      .filter(Boolean)
      .join(" | ");

    // Generate unique human-readable order ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `CMD-${Date.now().toString().slice(-6)}-${randomSuffix}`;

    const orderRecord: OrderRecord = {
      ...input,
      notes: operationalNotes,
      id: orderId,
      purchaseDate: purchaseDate.toISOString(),
      expirationDate: expirationDate.toISOString(),
      durationDays: plan.durationDays,
      amount: calculatedAmount,
      currency: "EUR",
      status: "pending",
    };

    // Persist order & customer to Supabase PostgreSQL
    await persistOrderToDatabase(orderRecord);

    // Trigger immediate Admin Notification Alert via Resend
    const notification = await sendAdminNewOrderAlert(orderRecord);

    return NextResponse.json(
      {
        success: true,
        orderId: orderRecord.id,
        planId: orderRecord.planId,
        amount: orderRecord.amount,
        purchaseDate: orderRecord.purchaseDate,
        expirationDate: orderRecord.expirationDate,
        durationDays: orderRecord.durationDays,
        message: "Commande enregistrée avec succès. Alerte administrateur déclenchée.",
        notificationStatus: notification.message,
      },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erreur serveur inattendue";
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
