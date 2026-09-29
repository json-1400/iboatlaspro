export type PlanDuration = "1-mois" | "3-mois" | "6-mois" | "12-mois";

export interface PlanConfig {
  readonly id: PlanDuration;
  readonly name: string;
  readonly durationDays: number;
  readonly price: number;
  readonly priceFormatted: string;
}

export const PLAN_CONFIGS: Record<PlanDuration, PlanConfig> = {
  "1-mois": {
    id: "1-mois",
    name: "Abonnement 1 Mois",
    durationDays: 30,
    price: 9.99,
    priceFormatted: "9,99 €",
  },
  "3-mois": {
    id: "3-mois",
    name: "Abonnement 3 Mois",
    durationDays: 90,
    price: 19.99,
    priceFormatted: "19,99 €",
  },
  "6-mois": {
    id: "6-mois",
    name: "Abonnement 6 Mois",
    durationDays: 180,
    price: 29.99,
    priceFormatted: "29,99 €",
  },
  "12-mois": {
    id: "12-mois",
    name: "Abonnement 12 Mois (1 An)",
    durationDays: 365,
    price: 49.99,
    priceFormatted: "49,99 €",
  },
};

/**
 * Calculates the exact price based on plan and number of simultaneous screens.
 * 1 screen: 1.0x (standard)
 * 2 screens: 1.7x (discounted second connection)
 * 3 screens: 2.3x (discounted family pack)
 */
export function calculateOrderAmount(planId: PlanDuration, devicesCount = 1): number {
  const base = PLAN_CONFIGS[planId]?.price ?? 49.99;
  if (devicesCount === 2) {
    return Math.round(base * 1.7 * 100) / 100;
  }
  if (devicesCount === 3) {
    return Math.round(base * 2.3 * 100) / 100;
  }
  return base;
}

export interface SubscriptionStatus {
  readonly purchaseDate: Date;
  readonly expirationDate: Date;
  readonly durationDays: number;
  readonly daysRemaining: number;
  readonly isExpired: boolean;
  readonly isExpiringSoon: boolean;
  readonly status: "active" | "expiring_soon" | "expired";
}

/**
 * Calculates the exact expiration date given a purchase date and plan duration.
 */
export function calculateExpirationDate(
  purchaseDate: Date,
  planId: PlanDuration
): Date {
  const plan = PLAN_CONFIGS[planId] ?? PLAN_CONFIGS["12-mois"];
  const expiration = new Date(purchaseDate.getTime());
  expiration.setDate(expiration.getDate() + plan.durationDays);
  return expiration;
}

/**
 * Computes the real-time status of a subscription based on its purchase date and duration.
 */
export function computeSubscriptionStatus(
  purchaseDate: Date,
  planId: PlanDuration,
  referenceDate: Date = new Date()
): SubscriptionStatus {
  const plan = PLAN_CONFIGS[planId] ?? PLAN_CONFIGS["12-mois"];
  const expirationDate = calculateExpirationDate(purchaseDate, planId);

  const diffTime = expirationDate.getTime() - referenceDate.getTime();
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const isExpired = daysRemaining <= 0;
  const isExpiringSoon = !isExpired && daysRemaining <= 7;

  let status: "active" | "expiring_soon" | "expired" = "active";
  if (isExpired) {
    status = "expired";
  } else if (isExpiringSoon) {
    status = "expiring_soon";
  }

  return {
    purchaseDate,
    expirationDate,
    durationDays: plan.durationDays,
    daysRemaining: isExpired ? 0 : daysRemaining,
    isExpired,
    isExpiringSoon,
    status,
  };
}
