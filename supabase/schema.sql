-- =====================================================================
-- iboatlaspro.com - Supabase Database Schema
-- Execute this script in the Supabase SQL Editor to initialize all tables
-- =====================================================================

-- 1. Customers Table
create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  phone text,
  mac_address text,
  device_type text,
  created_at timestamptz default now()
);

-- 2. Orders Table (With purchase date, duration and calculated expiration)
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_ref text unique not null,
  customer_id uuid references public.customers(id) on delete set null,
  plan_slug text not null,               -- '1-mois', '3-mois', '6-mois', '12-mois'
  duration_days int not null default 365,
  amount numeric(10,2) not null,
  currency text default 'EUR',
  status text default 'pending',         -- 'pending' | 'delivered' | 'expiring_soon' | 'expired'
  payment_method text default 'whatsapp',
  purchase_date timestamptz default now(),
  expiration_date timestamptz not null,
  reminder_sent boolean default false,
  created_at timestamptz default now()
);

-- 3. Support Tickets Table
create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(),
  ticket_ref text unique,
  email text not null,
  name text,
  phone text,
  subject text not null,
  message text not null,
  status text default 'open',            -- 'open' | 'in_progress' | 'resolved'
  created_at timestamptz default now()
);

-- 4. Indexes for Rapid Search & Cron Evaluation
create index if not exists idx_orders_expiration on public.orders(expiration_date, status);
create index if not exists idx_orders_customer on public.orders(customer_id);
create index if not exists idx_customers_email on public.customers(email);
create index if not exists idx_tickets_email on public.tickets(email);

-- 5. Row Level Security (RLS)
alter table public.customers enable row level security;
alter table public.orders enable row level security;
alter table public.tickets enable row level security;

-- Service Role policies (Allows backend API routes with Service Key to perform all operations)
create policy "Service role manages customers" on public.customers
  for all using (auth.role() = 'service_role');

create policy "Service role manages orders" on public.orders
  for all using (auth.role() = 'service_role');

create policy "Service role manages tickets" on public.tickets
  for all using (auth.role() = 'service_role');
