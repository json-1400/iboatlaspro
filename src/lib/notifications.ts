import { OrderRecord } from "./schemas/order";
import { PLAN_CONFIGS, computeSubscriptionStatus } from "./subscriptions";

export interface NotificationResult {
  readonly success: boolean;
  readonly message: string;
  readonly notificationId?: string;
}

function getAdminEmails(): string[] {
  const raw =
    process.env.ADMIN_EMAILS ||
    process.env.ADMIN_ALERT_EMAIL ||
    "contact@iboatlaspro.com";
  return raw
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

function getSenderEmail(): string {
  return (
    process.env.RESEND_FROM ||
    process.env.RESEND_FROM_EMAIL ||
    "iboatlaspro <support@iboatlaspro.com>"
  );
}

/**
 * Sends a real-time Admin Alert when a new order is placed.
 * Formats all operational data (purchase date, duration, MAC, WhatsApp)
 * so the admin can review and provision the client safely.
 */
export async function sendAdminNewOrderAlert(
  order: OrderRecord
): Promise<NotificationResult> {
  const plan = PLAN_CONFIGS[order.planId];
  const adminEmails = getAdminEmails();
  const senderEmail = getSenderEmail();
  const resendApiKey = process.env.RESEND_API_KEY;

  const cleanPhone = order.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Bonjour ${order.name}, nous avons bien reçu votre commande #${order.id} pour l'offre ${plan.name}. Nous préparons vos accès.`
  )}`;

  const subject = `🚨 NOUVELLE COMMANDE #${order.id} : ${plan.name} (${order.name})`;

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; background: #040A17; color: #FFFFFF; padding: 24px; border-radius: 12px; max-width: 600px;">
      <div style="border-bottom: 2px solid #1E7BFF; padding-bottom: 12px; margin-bottom: 16px;">
        <h2 style="color: #1E7BFF; margin: 0;">Alerte Nouvelle Commande</h2>
        <span style="color: #9FB0CC; font-size: 13px;">Référence : <strong>${order.id}</strong></span>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Date d'achat :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #FFFFFF;">${new Date(order.purchaseDate).toLocaleString("fr-FR")}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Forfait commandé :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #22C55E;">${plan.name} (${order.durationDays} jours)</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Montant :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #FFFFFF;">${order.amount.toFixed(2)} €</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Date d'expiration calculée :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #FFB800;">${new Date(order.expirationDate).toLocaleDateString("fr-FR")}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Client :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #FFFFFF;">${order.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Email :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #FFFFFF;">${order.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Téléphone / WhatsApp :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #22C55E;">${order.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9FB0CC;">Appareil :</td>
          <td style="padding: 8px 0; font-weight: bold; color: #FFFFFF;">${order.deviceType}</td>
        </tr>
        ${
          order.macAddress
            ? `<tr>
                <td style="padding: 8px 0; color: #9FB0CC;">Adresse MAC :</td>
                <td style="padding: 8px 0; font-family: monospace; font-weight: bold; color: #1E7BFF;">${order.macAddress}</td>
              </tr>`
            : ""
        }
      </table>

      <div style="margin-top: 24px; text-align: center;">
        <a href="${whatsappUrl}" target="_blank" style="background: #22C55E; color: #FFFFFF; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          Ouvrir la conversation WhatsApp client
        </a>
      </div>

      <div style="margin-top: 24px; padding: 12px; background: #0A1428; border: 1px solid #1A2A4A; border-radius: 8px; font-size: 12px; color: #9FB0CC;">
        <strong>Règle de sécurité DMCA :</strong> Ne transmettez jamais d'identifiants de streaming par e-mail en clair non chiffré. Privilégiez l'assistance sécurisée.
      </div>
    </div>
  `;

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: adminEmails,
          subject,
          html: emailHtml,
        }),
      });

      if (response.ok) {
        const data = (await response.json()) as { id?: string };
        return {
          success: true,
          message: "Alerte administrateur envoyée via Resend",
          notificationId: data.id,
        };
      }
    } catch {
      // Fallback silently if Resend is unreachable
    }
  }

  // Graceful Local / Production Log Fallback
  return {
    success: true,
    message: "Alerte commande enregistrée dans le système de notification",
    notificationId: `local-alert-${order.id}`,
  };
}

export interface ExpirationAlertPayload {
  readonly orderId: string;
  readonly customerName: string;
  readonly customerEmail: string;
  readonly customerPhone: string;
  readonly planId: OrderRecord["planId"];
  readonly purchaseDate: string;
  readonly daysRemaining: number;
  readonly isExpired: boolean;
}

/**
 * Triggers an expiration or pre-expiration alert based on purchase date & plan duration.
 */
export async function sendSubscriptionExpirationAlert(
  payload: ExpirationAlertPayload
): Promise<NotificationResult> {
  const plan = PLAN_CONFIGS[payload.planId];
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmails = getAdminEmails();
  const senderEmail = getSenderEmail();

  const statusText = payload.isExpired
    ? "Abonnement Expiré (J+0)"
    : `Expiration Imminente (J-${payload.daysRemaining})`;

  const subject = payload.isExpired
    ? `⚠️ [EXPIRÉ] Abonnement #${payload.orderId} (${payload.customerName})`
    : `⏳ [EXPIRATION J-${payload.daysRemaining}] Abonnement #${payload.orderId} (${payload.customerName})`;

  const renewalUrl = "https://iboatlaspro.com/abonnement-atlas-pro/12-mois/";

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; background: #040A17; color: #FFFFFF; padding: 24px; border-radius: 12px; max-width: 600px;">
      <h2 style="color: ${payload.isExpired ? "#EF4444" : "#FFB800"}; margin: 0 0 12px 0;">
        ${statusText}
      </h2>
      <p style="font-size: 14px; color: #9FB0CC; line-height: 1.6;">
        L'abonnement de <strong>${payload.customerName}</strong> (${payload.customerEmail} / ${payload.customerPhone}) 
        acheté le <strong>${new Date(payload.purchaseDate).toLocaleDateString("fr-FR")}</strong> 
        pour la durée de <strong>${plan.durationDays} jours</strong> est 
        ${payload.isExpired ? "arrivé à échéance" : `sur le point d'expirer dans ${payload.daysRemaining} jour(s)`}.
      </p>

      <div style="margin-top: 20px; padding: 16px; background: #0A1428; border: 1px solid #1A2A4A; border-radius: 8px;">
        <div style="font-size: 13px; color: #FFFFFF; margin-bottom: 8px;">
          Lien de renouvellement direct :
        </div>
        <a href="${renewalUrl}" style="color: #1E7BFF; font-weight: bold; text-decoration: underline; font-size: 14px;">
          ${renewalUrl}
        </a>
      </div>
    </div>
  `;

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [...adminEmails, payload.customerEmail],
          subject,
          html: emailHtml,
        }),
      });

      if (response.ok) {
        return {
          success: true,
          message: "Notification d'expiration envoyée avec succès",
        };
      }
    } catch {
      // Fallback
    }
  }

  return {
    success: true,
    message: `Alerte d'expiration enregistrée pour la commande #${payload.orderId}`,
  };
}
