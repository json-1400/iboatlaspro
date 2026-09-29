import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { OrderRecord } from "../schemas/order";

export interface DatabaseCustomer {
  id?: string;
  email: string;
  name: string;
  phone: string;
  mac_address?: string;
  device_type?: string;
  created_at?: string;
}

export interface DatabaseOrder {
  id?: string;
  order_ref: string;
  customer_id?: string;
  plan_slug: string;
  duration_days: number;
  amount: number;
  currency: string;
  status: string;
  payment_method?: string;
  purchase_date: string;
  expiration_date: string;
  reminder_sent?: boolean;
  created_at?: string;
}

export interface DatabaseTicket {
  id?: string;
  ticket_ref: string;
  email: string;
  name: string;
  phone?: string;
  subject: string;
  message: string;
  status: string;
  created_at?: string;
}

let supabaseAdminInstance: SupabaseClient | null = null;

/**
 * Returns a configured Supabase admin client using the service role key.
 * Returns null if Supabase environment variables are missing (graceful dev fallback).
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (supabaseAdminInstance) {
    return supabaseAdminInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !serviceKey) {
    return null;
  }

  supabaseAdminInstance = createClient(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseAdminInstance;
}

/**
 * Persists an order and customer record into Supabase PostgreSQL.
 */
export async function persistOrderToDatabase(
  order: OrderRecord
): Promise<{ success: boolean; customerId?: string }> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { success: false };
  }

  try {
    // 1. Upsert Customer
    const { data: customerData, error: customerError } = await supabase
      .from("customers")
      .upsert(
        {
          email: order.email,
          name: order.name,
          phone: order.phone,
          mac_address: order.macAddress || null,
          device_type: order.deviceType,
        },
        { onConflict: "email" }
      )
      .select("id")
      .single();

    if (customerError) {
      return { success: false };
    }

    const customerId: string | undefined = customerData?.id;

    // 2. Insert Order Record
    const { error: orderError } = await supabase.from("orders").insert({
      order_ref: order.id,
      customer_id: customerId,
      plan_slug: order.planId,
      duration_days: order.durationDays,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      purchase_date: order.purchaseDate,
      expiration_date: order.expirationDate,
    });

    if (orderError) {
      return { success: false };
    }

    return { success: true, customerId };
  } catch {
    return { success: false };
  }
}

/**
 * Persists a support ticket into Supabase PostgreSQL.
 */
export async function persistTicketToDatabase(
  ticketRef: string,
  email: string,
  name: string,
  phone: string,
  subject: string,
  message: string
): Promise<{ success: boolean }> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { success: false };
  }

  try {
    const { error } = await supabase.from("tickets").insert({
      ticket_ref: ticketRef,
      email,
      name,
      phone: phone || null,
      subject,
      message,
      status: "open",
    });

    return { success: !error };
  } catch {
    return { success: false };
  }
}

/**
 * Queries orders expiring within the next 7 days for automated notification.
 */
export async function fetchExpiringOrdersFromDatabase(): Promise<DatabaseOrder[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return [];
  }

  try {
    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() + 7);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .lte("expiration_date", thresholdDate.toISOString())
      .eq("reminder_sent", false);

    if (error || !data) {
      return [];
    }

    return data as DatabaseOrder[];
  } catch {
    return [];
  }
}
