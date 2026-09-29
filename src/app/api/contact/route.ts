import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { persistTicketToDatabase } from "@/lib/supabase/client";

const ContactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse e-mail valide"),
  subject: z.string().min(3, "Veuillez préciser l'objet de votre demande"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
  phone: z.string().optional().default(""),
});

export async function POST(req: NextRequest) {
  try {
    const rawBody: unknown = await req.json();
    const parseResult = ContactSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Champs de formulaire invalides",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, phone } = parseResult.data;
    const ticketId = `TCK-${Date.now().toString().slice(-6)}`;
    const resendApiKey = process.env.RESEND_API_KEY;
    const rawAdminEmails =
      process.env.ADMIN_EMAILS ||
      process.env.ADMIN_ALERT_EMAIL ||
      "contact@iboatlaspro.com";
    const adminEmails = rawAdminEmails
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);
    const senderEmail =
      process.env.RESEND_FROM ||
      process.env.RESEND_FROM_EMAIL ||
      "iboatlaspro <support@iboatlaspro.com>";

    // Format clean notification for admin
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background: #040A17; color: #FFFFFF; padding: 24px; border-radius: 12px; max-width: 600px;">
        <div style="border-bottom: 2px solid #1E7BFF; padding-bottom: 12px; margin-bottom: 16px;">
          <h2 style="color: #1E7BFF; margin: 0;">Nouveau Message de Support #${ticketId}</h2>
          <span style="color: #9FB0CC; font-size: 13px;">De : <strong>${name}</strong> (${email})</span>
        </div>
        <p style="font-size: 14px; color: #9FB0CC; margin-bottom: 8px;">
          <strong>Objet :</strong> ${subject}
        </p>
        ${
          phone
            ? `<p style="font-size: 14px; color: #22C55E; margin-bottom: 8px;">
                <strong>WhatsApp :</strong> ${phone}
              </p>`
            : ""
        }
        <div style="background: #0A1428; border: 1px solid #1A2A4A; padding: 16px; border-radius: 8px; font-size: 14px; color: #FFFFFF; line-height: 1.6; margin-top: 16px;">
          ${message.replace(/\n/g, "<br />")}
        </div>
      </div>
    `;

    // Persist ticket to Supabase PostgreSQL (if configured)
    await persistTicketToDatabase(ticketId, email, name, phone, subject, message);

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: senderEmail,
            to: adminEmails,
            subject: `📩 [SUPPORT #${ticketId}] ${subject} (${name})`,
            html: emailHtml,
          }),
        });
      } catch {
        // Fallback gracefully
      }
    }

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Votre message a bien été transmis au support technique.",
      },
      { status: 201 }
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Erreur inattendue";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
