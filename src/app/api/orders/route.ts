import { NextRequest, NextResponse } from "next/server";
import { OrderSchema, OrderRecord } from "@/lib/schemas/order";
import {
  PLAN_CONFIGS,
  calculateExpirationDate,
} from "@/lib/subscriptions";
import { sendAdminNewOrderAlert } from "@/lib/notifications";
import { persistOrderToDatabase } from "@/lib/supabase/client";

export async function POST(req: NextRequest) {
  try {
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
    const plan = PLAN_CONFIGS[input.planId];
    const purchaseDate = new Date();
    const expirationDate = calculateExpirationDate(purchaseDate, input.planId);

    // Generate unique human-readable order ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `CMD-${Date.now().toString().slice(-6)}-${randomSuffix}`;

    const orderRecord: OrderRecord = {
      ...input,
      id: orderId,
      purchaseDate: purchaseDate.toISOString(),
      expirationDate: expirationDate.toISOString(),
      durationDays: plan.durationDays,
      amount: plan.price,
      currency: "EUR",
      status: "pending",
    };

    // Persist order & customer to Supabase PostgreSQL (if configured)
    await persistOrderToDatabase(orderRecord);

    // Trigger immediate Admin Notification Alert
    const notification = await sendAdminNewOrderAlert(orderRecord);

    return NextResponse.json(
      {
        success: true,
        orderId: orderRecord.id,
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
