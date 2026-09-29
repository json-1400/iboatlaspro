import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site-content";

export function Testimonials() {
  return (
    <section
      id="avis"
      className="py-16 md:py-24 bg-[#040A17] border-t border-[#1A2A4A]/40"
      aria-label="Témoignages clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Trust Info & Global Rating */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <span className="text-xs sm:text-sm font-bold text-[#1E7BFF] tracking-wider uppercase">
              ILS NOUS FONT CONFIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Des milliers de clients satisfaits
            </h2>
            <p className="text-sm sm:text-base text-[#9FB0CC] leading-relaxed">
              Rejoignez notre communauté et profitez d&apos;une expérience IPTV
              sans compromis.
            </p>

            {/* Stars & Numerical Score */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#FFB800]" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">
                4.8/5{" "}
                <span className="text-[#9FB0CC] font-normal">(2 348 avis)</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3 Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-[#0A1428]/85 border border-[#1A2A4A] rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-[#1E7BFF]/40 transition-colors"
              >
                {/* User Header */}
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#1E7BFF]/40 flex-shrink-0">
                    <Image
                      src={item.avatarSrc}
                      alt={`Photo de profil de ${item.name}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#9FB0CC]">{item.location}</p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-0.5 text-[#FFB800]" aria-label="Note 5 sur 5 étoiles">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-[13px] text-[#9FB0CC] italic leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
