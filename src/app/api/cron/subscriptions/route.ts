import { NextRequest, NextResponse } from "next/server";
import {
  computeSubscriptionStatus,
  PlanDuration,
} from "@/lib/subscriptions";
import { sendSubscriptionExpirationAlert } from "@/lib/notifications";
import { fetchExpiringOrdersFromDatabase } from "@/lib/supabase/client";

export const dynamic = "force-dynamic";

// Demonstration subscription database registry for expiration tracking
interface StoredSubscription {
  readonly id: string;
  readonly customerName: string;
  readonly customerEmail: string;
  readonly customerPhone: string;
  readonly planId: PlanDuration;
  readonly purchaseDate: string; // ISO String
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    // Optional bearer secret check if configured
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }

    // Fetch real expiring orders from Supabase if configured
    const dbOrders = await fetchExpiringOrdersFromDatabase();

    const subscriptionsToEvaluate: StoredSubscription[] = dbOrders.length > 0
      ? dbOrders.map((o) => ({
          id: o.order_ref,
          customerName: "Client",
          customerEmail: "client@example.com",
          customerPhone: "",
          planId: (o.plan_slug as PlanDuration) || "12-mois",
          purchaseDate: o.purchase_date,
        }))
      : [
          {
            id: "CMD-892145",
            customerName: "Marc V.",
            customerEmail: "marc.v@example.com",
            customerPhone: "+33612345678",
            planId: "3-mois",
            purchaseDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: "CMD-781032",
            customerName: "David L.",
            customerEmail: "david.l@example.com",
            customerPhone: "+32470123456",
            planId: "12-mois",
            purchaseDate: new Date(Date.now() - 366 * 24 * 60 * 60 * 1000).toISOString(),
          },
        ];

    const results = [];

    for (const sub of subscriptionsToEvaluate) {
      const status = computeSubscriptionStatus(
        new Date(sub.purchaseDate),
        sub.planId
      );

      if (status.isExpired || status.isExpiringSoon) {
        const alertRes = await sendSubscriptionExpirationAlert({
          orderId: sub.id,
          customerName: sub.customerName,
          customerEmail: sub.customerEmail,
          customerPhone: sub.customerPhone,
          planId: sub.planId,
          purchaseDate: sub.purchaseDate,
          daysRemaining: status.daysRemaining,
          isExpired: status.isExpired,
        });

        results.push({
          orderId: sub.id,
          customer: sub.customerName,
          status: status.status,
          daysRemaining: status.daysRemaining,
          alertSent: alertRes.success,
        });
      }
    }

    return NextResponse.json({
      success: true,
      evaluatedAt: new Date().toISOString(),
      processedCount: subscriptionsToEvaluate.length,
      alertsTriggered: results.length,
      details: results,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Erreur inattendue";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
