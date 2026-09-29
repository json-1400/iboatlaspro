import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MerciClientContent } from "@/components/MerciClientContent";
import { constructMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Confirmation de Commande | iboatlaspro",
    description:
      "Merci pour votre commande. Vos identifiants sécurisés et votre accès IPTV sont en cours de préparation.",
    path: "/merci/",
    noIndex: true,
  });
}

export default function MerciPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#040A17] text-white">
      <Navbar />

      <main className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center text-white">
              <div className="w-8 h-8 border-2 border-[#1E7BFF] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <MerciClientContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
