// CLIENT: interactive multi-step checkout flow
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  Tv,
  Check,
  RefreshCw,
} from "lucide-react";
import {
  calculateOrderAmount,
  PlanDuration,
} from "@/lib/subscriptions";

function normalizePlan(raw: string | null): PlanDuration {
  if (!raw) return "12-mois";
  const map: Record<string, PlanDuration> = {
    "1-mois": "3-mois",
    "3-mois": "3-mois",
    "6-mois": "6-mois",
    "12-mois": "12-mois",
    "plan-1m": "3-mois",
    "plan-3m": "3-mois",
    "plan-6m": "6-mois",
    "plan-12m": "12-mois",
    "smarters-12m": "12-mois",
    "ibo-pack-12m": "12-mois",
  };
  return map[raw] || "12-mois";
}

function CommanderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramPlan = searchParams.get("plan");
  const paramDevices = searchParams.get("devices");

  const [selectedPlan, setSelectedPlan] = useState<PlanDuration>(() =>
    normalizePlan(paramPlan)
  );
  const [devicesCount, setDevicesCount] = useState<number>(() => {
    const parsed = Number(paramDevices);
    return parsed >= 1 && parsed <= 4 ? parsed : 1;
  });
  const [deviceType, setDeviceType] = useState("smart-tv");
  const [isRenewal, setIsRenewal] = useState<boolean>(false);
  const [existingCode, setExistingCode] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (paramPlan) {
      setSelectedPlan(normalizePlan(paramPlan));
    }
    if (paramDevices) {
      const parsed = Number(paramDevices);
      if (parsed >= 1 && parsed <= 4) {
        setDevicesCount(parsed);
      }
    }
  }, [paramPlan, paramDevices]);

  const breadcrumbItems = [{ label: "Commander", href: "/commander/" }];

  const plans: { id: PlanDuration; name: string; basePrice: number; price: string; desc: string }[] = [
    { id: "3-mois", name: "3 Mois", basePrice: 19.99, price: "19,99 €", desc: "soit 6,66 € / mois" },
    {
      id: "6-mois",
      name: "6 Mois",
      basePrice: 29.99,
      price: "29,99 €",
      desc: "soit 5,00 € / mois - Choix Malin",
    },
    {
      id: "12-mois",
      name: "12 Mois",
      basePrice: 39.99,
      price: "39,99 €",
      desc: "soit 3,33 € / mois - Recommandé",
    },
  ];

  const currentTotal = calculateOrderAmount(selectedPlan, devicesCount);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !phone.trim()) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: selectedPlan,
          devicesCount,
          deviceType,
          name: name.trim() || "Client",
          email: email.trim(),
          phone: phone.trim(),
          macAddress: macAddress.trim(),
          isRenewal,
          existingCode: existingCode.trim(),
          honeypot,
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        orderId?: string;
        error?: string;
      };

      if (res.ok && data.success && data.orderId) {
        // Instant redirect to dedicated /merci post-purchase confirmation page
        router.push(
          `/merci?orderId=${encodeURIComponent(data.orderId)}&plan=${encodeURIComponent(
            selectedPlan
          )}&devices=${devicesCount}`
        );
      } else {
        setErrorMessage(
          data.error || "Une erreur est survenue lors de l'enregistrement."
        );
      }
    } catch {
      setErrorMessage(
        "Impossible de contacter le serveur de commande. Veuillez réessayer ou contacter le support direct."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                <Lock className="w-3.5 h-3.5 text-[#1E7BFF]" />
                COMMANDE SÉCURISÉE & ACTIVATION EN MOINS DE 15 MIN
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Finaliser votre commande{" "}
                <span className="text-gradient-primary">iboatlaspro</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] max-w-xl mx-auto">
                Activation immédiate de votre flux IPTV 4K / FHD sans coupure.
                Remplissez les informations ci-dessous pour lancer la préparation.
              </p>
            </div>

            <div className="bg-[#0A1428] border border-[#1A2A4A] rounded-2xl p-6 sm:p-10 shadow-2xl">
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleOrder} className="space-y-8">
                {/* Honeypot field (hidden from real users, traps spam bots) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_url_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Step 1: Plan Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-white">
                      1. Choisissez votre durée d&apos;abonnement
                    </h2>
                    <span className="text-xs text-[#1E7BFF] font-medium">
                      Sans engagement
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {plans.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPlan(p.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedPlan === p.id
                            ? "border-[#1E7BFF] bg-[#1E7BFF]/10 shadow-[0_0_20px_rgba(30,123,255,0.2)]"
                            : "border-[#1A2A4A] bg-[#060E1F] hover:border-[#1E7BFF]/50"
                        }`}
                      >
                        <div className="text-sm font-bold text-white">
                          {p.name}
                        </div>
                        <div className="text-lg font-extrabold text-[#1E7BFF] mt-1">
                          {p.price}
                        </div>
                        <div className="text-[10px] text-[#9FB0CC] mt-0.5">
                          {p.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Multi-Screen Option */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-white">
                      2. Nombre d&apos;écrans simultanés (Multi-Connexions)
                    </h2>
                    <span className="text-xs text-[#22C55E] font-medium">
                      +20 € par écran supplémentaire
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { count: 1, label: "1 Écran Standard", tag: "Inclus dans l'offre", extra: "Pour 1 téléviseur ou smartphone" },
                      { count: 2, label: "2 Écrans Simultanés", tag: "+20,00 € seulement", extra: "Regardez en même temps sur 2 écrans" },
                      { count: 3, label: "3 Écrans Simultanés", tag: "+40,00 € seulement", extra: "Accès complet pour toute la maison" },
                      { count: 4, label: "4 Écrans Simultanés", tag: "+60,00 € seulement", extra: "Idéal grands foyers & 4 TV simultanées" },
                    ].map((opt) => (
                      <button
                        key={opt.count}
                        type="button"
                        onClick={() => setDevicesCount(opt.count)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          devicesCount === opt.count
                            ? "border-[#22C55E] bg-[#22C55E]/10 shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                            : "border-[#1A2A4A] bg-[#060E1F] hover:border-[#22C55E]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white">{opt.label}</span>
                          {devicesCount === opt.count && (
                            <Check className="w-4 h-4 text-[#22C55E]" />
                          )}
                        </div>
                        <div className="text-xs font-semibold text-[#22C55E] mt-1">
                          {opt.tag}
                        </div>
                        <div className="text-[11px] text-[#9FB0CC] mt-0.5">
                          {opt.extra}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Equipment & Renewal */}
                <div>
                  <h2 className="text-base font-bold text-white mb-3">
                    3. Votre équipement & Type de commande
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="device-choice"
                        className="block text-xs text-[#9FB0CC] mb-1.5"
                      >
                        Modèle d&apos;appareil principal
                      </label>
                      <select
                        id="device-choice"
                        value={deviceType}
                        onChange={(e) => setDeviceType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm focus:outline-none focus:border-[#1E7BFF]"
                      >
                        <option value="smart-tv">Smart TV (Samsung / LG / Sony / Philips)</option>
                        <option value="fire-tv">Amazon Fire TV Stick</option>
                        <option value="android-box">Box Android / Google TV / Nvidia Shield</option>
                        <option value="apple-tv">Apple TV / iPhone / iPad</option>
                        <option value="mag">Boîtier MAG (250/254/322...)</option>
                        <option value="pc">Ordinateur Windows / macOS</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="mac-choice"
                        className="block text-xs text-[#9FB0CC] mb-1.5"
                      >
                        Adresse MAC (Optionnel pour MAG / Smart TV)
                      </label>
                      <input
                        id="mac-choice"
                        type="text"
                        placeholder="Ex: 00:1a:79:xx:xx:xx"
                        value={macAddress}
                        onChange={(e) => setMacAddress(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm font-mono placeholder-[#9FB0CC]/40 focus:outline-none focus:border-[#1E7BFF]"
                      />
                    </div>
                  </div>

                  {/* Renewal toggle */}
                  <div className="mt-4 p-4 rounded-xl bg-[#060E1F] border border-[#1A2A4A]">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isRenewal}
                        onChange={(e) => setIsRenewal(e.target.checked)}
                        className="w-4 h-4 rounded border-[#1A2A4A] text-[#1E7BFF] focus:ring-0 cursor-pointer"
                      />
                      <span className="text-sm font-medium text-white flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-[#1E7BFF]" />
                        Il s&apos;agit d&apos;un renouvellement (j&apos;ai déjà un code d&apos;accès ou identifiant)
                      </span>
                    </label>

                    {isRenewal && (
                      <div className="mt-3 pt-3 border-t border-[#1A2A4A]">
                        <label
                          htmlFor="existing-code"
                          className="block text-xs text-[#9FB0CC] mb-1.5"
                        >
                          Code d&apos;accès ou numéro d&apos;abonnement à renouveler
                        </label>
                        <input
                          id="existing-code"
                          type="text"
                          placeholder="Ex: AP-784912 ou votre nom d'utilisateur"
                          value={existingCode}
                          onChange={(e) => setExistingCode(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-lg bg-[#040A17] border border-[#1A2A4A] text-white text-sm font-mono placeholder-[#9FB0CC]/40 focus:outline-none focus:border-[#1E7BFF]"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 4: Contact Info */}
                <div>
                  <h2 className="text-base font-bold text-white mb-3">
                    4. Coordonnées de contact pour l&apos;activation
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="name-choice"
                        className="block text-xs text-[#9FB0CC] mb-1.5"
                      >
                        Nom complet
                      </label>
                      <input
                        id="name-choice"
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm focus:outline-none focus:border-[#1E7BFF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email-choice"
                        className="block text-xs text-[#9FB0CC] mb-1.5"
                      >
                        Adresse e-mail
                      </label>
                      <input
                        id="email-choice"
                        type="email"
                        required
                        placeholder="nom@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm focus:outline-none focus:border-[#1E7BFF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone-choice"
                        className="block text-xs text-[#9FB0CC] mb-1.5"
                      >
                        Numéro WhatsApp (recommandé pour activation)
                      </label>
                      <input
                        id="phone-choice"
                        type="tel"
                        required
                        placeholder="+33 6 12 34 56 78"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm focus:outline-none focus:border-[#1E7BFF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit & Price Summary */}
                <div className="pt-4 border-t border-[#1A2A4A]">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="text-xs text-[#9FB0CC]">Total à régler pour l&apos;activation :</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1E7BFF]">
                        {currentTotal.toFixed(2)} €
                        <span className="text-xs font-normal text-[#9FB0CC] ml-2">
                          ({plans.find((p) => p.id === selectedPlan)?.name} - {devicesCount} {devicesCount > 1 ? "écrans" : "écran"})
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] disabled:opacity-50 disabled:cursor-not-allowed glow-primary transition-all duration-200"
                  >
                    <Lock className="w-4 h-4" />
                    <span>
                      {loading
                        ? "Enregistrement de votre commande..."
                        : `Valider ma commande (${currentTotal.toFixed(2)} €)`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9FB0CC] pt-2">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                    Activation en moins de 15 minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                    Garantie de remboursement sous 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tv className="w-3.5 h-3.5 text-[#1E7BFF]" />
                    Flux 4K UHD & FHD sans buffering
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function CommanderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#040A17] flex items-center justify-center text-white">
          <div className="w-8 h-8 border-2 border-[#1E7BFF] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CommanderContent />
    </Suspense>
  );
}
