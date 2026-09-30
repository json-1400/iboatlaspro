// CLIENT: interactive FAQ accordion expand/collapse state
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FAQ_ITEMS } from "@/data/site-content";

export function CtaFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/212715214002";
  const telegramUrl =
    process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/iboatlaspro";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-[#040A17] gradient-border-top relative"
      aria-label="Questions fréquentes et support"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: CTA Card with Remote Background */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-[#1A2A4A] bg-[#0A1428]/90 p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            {/* Background image of remote in hand with dark gradient overlay */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <Image
                src="/images/cta-remote.jpg"
                alt="Télécommande IPTV en main devant une télévision"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center opacity-30 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent" />
            </div>

            <div className="space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Prêt à transformer votre télé en cinéma ?
              </h2>
              <p className="text-sm text-[#9FB0CC] leading-relaxed">
                Accédez dès maintenant à des milliers de chaînes, films et
                séries en qualité 4K / FHD. Activation instantanée.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="#abonnement"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#1E7BFF] hover:bg-[#2D9CFF] glow-primary transition-all duration-200"
              >
                <span>Obtenir un accès maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Center Column: FAQ Accordion */}
          <div className="lg:col-span-5 rounded-2xl border border-[#1A2A4A] bg-[#0A1428]/85 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Questions fréquentes
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB0CC] mt-1 mb-6">
                Vous avez des questions ? Retrouvez ici les réponses aux plus
                courantes.
              </p>

              {/* Accordion List */}
              <div className="space-y-2.5">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="border-b border-[#1A2A4A]/60 pb-2.5 last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        className="w-full py-2.5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-white/90 hover:text-[#1E7BFF] transition-colors gap-3"
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#9FB0CC] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#1E7BFF]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <p className="text-xs text-[#9FB0CC] leading-relaxed pt-1 pb-2">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 2 Big Contact Action Buttons */}
          <div
            id="contact"
            className="lg:col-span-3 flex flex-col justify-center gap-4"
          >
            {/* WhatsApp Green Card Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#22C55E] hover:bg-[#1fa951] text-white shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
              aria-label="Contacter le support client sur WhatsApp"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-base font-extrabold leading-tight">
                  Besoin d&apos;aide ?
                </div>
                <div className="text-xs text-white/90 font-medium mt-0.5">
                  Écrivez-nous sur WhatsApp
                </div>
              </div>
            </a>

            {/* Telegram / 24/7 Support Blue Card Button */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#1E7BFF] hover:bg-[#2D9CFF] text-white shadow-[0_0_25px_rgba(30,123,255,0.3)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
              aria-label="Contacter le support client 24/7 sur Telegram"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <FaTelegramPlane className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-base font-extrabold leading-tight">
                  Support 24/7
                </div>
                <div className="text-xs text-white/90 font-medium mt-0.5">
                  Nous sommes là pour vous !
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
