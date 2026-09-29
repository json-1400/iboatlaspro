// CLIENT: interactive multi-step checkout flow
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function normalizePlan(raw: string | null): string {
  if (!raw) return "12-mois";
  const map: Record<string, string> = {
    "1-mois": "1-mois",
    "3-mois": "3-mois",
    "6-mois": "6-mois",
    "12-mois": "12-mois",
    "plan-1m": "1-mois",
    "plan-3m": "3-mois",
    "plan-6m": "6-mois",
    "plan-12m": "12-mois",
    "smarters-12m": "12-mois",
    "ibo-pack-12m": "12-mois",
  };
  return map[raw] || "12-mois";
}

function CommanderContent() {
  const searchParams = useSearchParams();
  const paramPlan = searchParams.get("plan");

  const [selectedPlan, setSelectedPlan] = useState(() => normalizePlan(paramPlan));
  const [deviceType, setDeviceType] = useState("smart-tv");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (paramPlan) {
      setSelectedPlan(normalizePlan(paramPlan));
    }
  }, [paramPlan]);
  const [macAddress, setMacAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbItems = [{ label: "Commander", href: "/commander/" }];

  const plans = [
    { id: "1-mois", name: "1 Mois", price: "€ 9,99", desc: "Sans engagement" },
    { id: "3-mois", name: "3 Mois", price: "€ 19,99", desc: "6,66 € / mois" },
    {
      id: "6-mois",
      name: "6 Mois",
      price: "€ 29,99",
      desc: "5,00 € / mois - Choix Malin",
    },
    {
      id: "12-mois",
      name: "12 Mois",
      price: "€ 49,99",
      desc: "4,16 € / mois - Recommandé",
    },
  ];

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
          deviceType,
          name: name.trim() || "Client",
          email: email.trim(),
          phone: phone.trim(),
          macAddress: macAddress.trim(),
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        orderId?: string;
        expirationDate?: string;
        error?: string;
      };

      if (res.ok && data.success) {
        setOrderId(data.orderId || "");
        setExpirationDate(data.expirationDate || "");
        setSubmitted(true);
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
                COMMANDE SÉCURISÉE & ACTIVATION RAPIDE
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Finaliser votre commande{" "}
                <span className="gradient-text-blue">Atlas Pro</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] max-w-lg mx-auto">
                Votre demande est transmise en temps réel à nos équipes pour activation sous 15 minutes.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Commande #{orderId} enregistrée !
                  </h2>
                  <div className="p-5 rounded-xl bg-[#060E1F] border border-[#1A2A4A] max-w-md mx-auto text-left text-xs sm:text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#9FB0CC]">Formule choisie :</span>
                      <strong className="text-white">
                        {plans.find((p) => p.id === selectedPlan)?.name}
                      </strong>
                    </div>
                    {expirationDate && (
                      <div className="flex justify-between">
                        <span className="text-[#9FB0CC]">Date d&apos;échéance :</span>
                        <strong className="text-[#22C55E]">
                          {new Date(expirationDate).toLocaleDateString("fr-FR")}
                        </strong>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#9FB0CC]">Statut :</span>
                      <span className="text-[#1E7BFF] font-semibold">En cours d&apos;activation</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#9FB0CC] max-w-md mx-auto leading-relaxed">
                    Merci {name || "cher client"}. L&apos;administrateur a reçu l&apos;alerte instantanée et traite votre compte. Vous pouvez accélérer votre mise en service par message direct.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`${
                        process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/212715214002"
                      }?text=${encodeURIComponent(
                        `Bonjour, je viens de valider la commande #${orderId} pour l'offre ${selectedPlan} (Email: ${email}). Merci d'activer mon compte.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#22C55E] hover:bg-[#1fa951] transition-all"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Confirmer sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleOrder} className="space-y-8">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* Step 1: Select Plan */}
                  <div>
                    <h2 className="text-base font-bold text-white mb-3">
                      1. Choisissez votre formule
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {plans.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPlan(p.id)}
                          className={`p-4 rounded-xl text-left border transition-all ${
                            selectedPlan === p.id
                              ? "bg-[#1E7BFF]/15 border-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.3)]"
                              : "bg-[#060E1F] border-[#1A2A4A] hover:border-[#1E7BFF]/50"
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

                  {/* Step 2: Device Type */}
                  <div>
                    <h2 className="text-base font-bold text-white mb-3">
                      2. Votre équipement principal
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="device-choice"
                          className="block text-xs text-[#9FB0CC] mb-1.5"
                        >
                          Modèle d&apos;appareil
                        </label>
                        <select
                          id="device-choice"
                          value={deviceType}
                          onChange={(e) => setDeviceType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm focus:outline-none focus:border-[#1E7BFF]"
                        >
                          <option value="smart-tv">Smart TV (Samsung / LG / Sony)</option>
                          <option value="fire-tv">Amazon Fire TV Stick</option>
                          <option value="android-box">Box Android / Google TV</option>
                          <option value="apple-tv">Apple TV / iPhone / iPad</option>
                          <option value="mag">Boîtier MAG</option>
                          <option value="pc">Windows / Mac</option>
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
                          placeholder="Ex: 00:1a:79:..."
                          value={macAddress}
                          onChange={(e) => setMacAddress(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm font-mono placeholder-[#9FB0CC]/40 focus:outline-none focus:border-[#1E7BFF]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Contact Info */}
                  <div>
                    <h2 className="text-base font-bold text-white mb-3">
                      3. Coordonnées de livraison
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
                          Numéro WhatsApp
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

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] disabled:opacity-50 disabled:cursor-not-allowed glow-primary transition-all duration-200"
                    >
                      <Lock className="w-4 h-4" />
                      <span>
                        {loading
                          ? "Transmission de votre commande..."
                          : `Valider ma commande (${plans.find((p) => p.id === selectedPlan)?.price})`}
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9FB0CC] pt-2">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                      Livraison en moins de 15 min
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      Garantie de remboursement sous 24h
                    </span>
                  </div>
                </form>
              )}
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
