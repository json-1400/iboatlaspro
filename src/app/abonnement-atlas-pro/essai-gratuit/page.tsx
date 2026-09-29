// CLIENT: test request interactive form submission
"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, Zap, Send, CheckCircle2 } from "lucide-react";

export default function EssaiGratuitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [device, setDevice] = useState("smart-tv");
  const [contact, setContact] = useState("");

  const breadcrumbItems = [
    { label: "Abonnement Atlas Pro", href: "/abonnement-atlas-pro/" },
    { label: "Essai Gratuit 24h", href: "/abonnement-atlas-pro/essai-gratuit/" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1428] border border-[#1E7BFF] shadow-[0_0_15px_rgba(30,123,255,0.3)]">
              TEST SANS ENGAGEMENT
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Demandez votre{" "}
              <span className="gradient-text-blue">Essai Gratuit 24h</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9FB0CC] max-w-xl mx-auto leading-relaxed">
              Testez la fluidité de nos serveurs en 4K UHD sur vos applications
              préférées (Atlas Pro ONTV, IBO Player, IPTV Smarters) avant tout
              achat.
            </p>

            <div className="mt-10 p-8 rounded-2xl bg-[#0A1428] border border-[#1A2A4A] text-left max-w-lg mx-auto shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Demande de test reçue !
                  </h2>
                  <p className="text-xs sm:text-sm text-[#9FB0CC] leading-relaxed">
                    Votre code de test 24h vous est envoyé sous quelques minutes
                    sur vos coordonnées. Vérifiez également vos spams ou votre
                    WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="device-select"
                      className="block text-xs font-semibold text-white mb-2"
                    >
                      Votre appareil principal
                    </label>
                    <select
                      id="device-select"
                      value={device}
                      onChange={(e) => setDevice(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm focus:outline-none focus:border-[#1E7BFF]"
                    >
                      <option value="smart-tv">Smart TV (Samsung / LG / Sony)</option>
                      <option value="fire-tv">Amazon Fire TV Stick</option>
                      <option value="android-box">Box Android / Google TV</option>
                      <option value="mag">Boîtier MAG</option>
                      <option value="smartphone">Smartphone / Tablette</option>
                      <option value="pc">Windows / Mac</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-input"
                      className="block text-xs font-semibold text-white mb-2"
                    >
                      Numéro WhatsApp ou Adresse E-mail
                    </label>
                    <input
                      id="contact-input"
                      type="text"
                      required
                      placeholder="Ex: +33 6 12 34 56 78 ou contact@email.com"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#060E1F] border border-[#1A2A4A] text-white text-sm placeholder-[#9FB0CC]/50 focus:outline-none focus:border-[#1E7BFF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200 mt-2"
                  >
                    <span>Recevoir mon code test 24h</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-xs text-[#9FB0CC] pt-2">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#1E7BFF]" />
                      Envoi rapide
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      Sans engagement
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
