import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commander votre Abonnement | iboatlaspro",
  description:
    "Paiement sécurisé et activation immédiate de votre abonnement IPTV Atlas Pro. Choisissez votre formule et accédez à vos flux 4K.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://iboatlaspro.com/commander/",
  },
};

export default function CommanderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
