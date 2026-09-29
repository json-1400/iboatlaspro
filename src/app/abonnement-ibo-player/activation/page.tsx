// CLIENT: interactive activation form submission
"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Zap, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IboActivationPage() {
  const [macAddress, setMacAddress] = useState("");
  const [deviceKey, setDeviceKey] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbItems = [
    { label: "Abonnement IBO Player", href: "/abonnement-ibo-player/" },
    { label: "Activation", href: "/abonnement-ibo-player/activation/" },
  ];

  const handleActivation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!macAddress.trim() || !deviceKey.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-12 md:py-20 glow-stadium">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF]">
                ACTIVATION OFFICIELLE IMMÉDIATE
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Activation <span className="gradient-text-blue">IBO Player Pro</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
                Renseignez les identifiants affichés sur l&apos;écran d&apos;accueil de votre
                application IBO Player pour débloquer votre lecteur sans délai.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] shadow-2xl max-w-lg mx-auto">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Demande d&apos;activation prise en compte !
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    Votre application pour l&apos;adresse MAC{" "}
                    <strong className="text-white">{macAddress}</strong> est en
                    cours d&apos;activation. Un e-mail de confirmation vous a été
                    envoyé.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleActivation} className="space-y-5">
                  <div>
                    <label
                      htmlFor="mac-input"
                      className="block text-xs font-semibold text-white mb-2"
                    >
                      Adresse MAC (Ex: 00:1a:79:xx:xx:xx)
                    </label>
                    <input
                      id="mac-input"
                      type="text"
                      required
                      placeholder="00:1a:79:..."
                      value={macAddress}
                      onChange={(e) => setMacAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm font-mono placeholder-[#9FB0CC]/40 focus:outline-none focus:border-[#1E7BFF]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="key-input"
                      className="block text-xs font-semibold text-white mb-2"
                    >
                      Device Key (Code à 6 chiffres)
                    </label>
                    <input
                      id="key-input"
                      type="text"
                      required
                      placeholder="Ex: 849201"
                      value={deviceKey}
                      onChange={(e) => setDeviceKey(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm font-mono placeholder-[#9FB0CC]/40 focus:outline-none focus:border-[#1E7BFF]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-input"
                      className="block text-xs font-semibold text-white mb-2"
                    >
                      Adresse E-mail pour confirmation
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      placeholder="votre.email@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm placeholder-[#9FB0CC]/40 focus:outline-none focus:border-[#1E7BFF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200 mt-2"
                  >
                    <span>Valider l&apos;activation (7,99 €)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-xs text-[#9FB0CC] pt-2">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                      Actif en 5 minutes
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      Licence officielle garantie
                    </span>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 text-center text-xs text-[#9FB0CC]">
              Vous ne savez pas où trouver ces codes sur votre écran ?{" "}
              <Link
                href="/centre-d-aide/tutoriels/configurer-ibo-player/"
                className="text-[#1E7BFF] hover:underline font-semibold"
              >
                Comment configurer votre playlist IBO Player pas à pas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
