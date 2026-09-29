import { z } from "zod";

export const OrderSchema = z.object({
  planId: z.enum(["1-mois", "3-mois", "6-mois", "12-mois"], {
    message: "Veuillez sélectionner un forfait valide",
  }),
  deviceType: z.string().min(1, "Veuillez sélectionner votre type d'appareil"),
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse e-mail valide"),
  phone: z.string().min(6, "Veuillez saisir un numéro de téléphone valide"),
  macAddress: z.string().optional().default(""),
  notes: z.string().optional().default(""),
  devicesCount: z.coerce.number().int().min(1).max(3).optional().default(1),
  isRenewal: z.boolean().optional().default(false),
  existingCode: z.string().optional().default(""),
  honeypot: z.string().optional().default(""),
});

export type OrderInput = z.infer<typeof OrderSchema>;

export interface OrderRecord extends OrderInput {
  readonly id: string;
  readonly purchaseDate: string; // ISO String
  readonly expirationDate: string; // ISO String
  readonly durationDays: number;
  readonly amount: number;
  readonly currency: string;
  readonly status: "pending" | "processing" | "delivered" | "expired";
}
