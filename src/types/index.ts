export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface FeatureItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly iconName: "tv" | "buffer" | "zap" | "support";
}

export interface DeviceItem {
  readonly id: string;
  readonly name: string;
  readonly iconType: "smart-tv" | "android" | "fire-tv" | "mag-box" | "windows" | "apple" | "smartphone" | "tablet";
}

export interface PricingPlan {
  readonly id: string;
  readonly duration: string;
  readonly subtitle: string;
  readonly price: string;
  readonly monthlyEquivalent?: string;
  readonly isHighlighted?: boolean;
  readonly badgeText?: string;
  readonly ctaText: string;
  readonly features: readonly string[];
}

export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly rating: number;
  readonly comment: string;
  readonly avatarSrc: string;
}

export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly iconType: "shield" | "zap" | "globe" | "headset";
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface VodItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly quality: string;
  readonly year: string;
  readonly rating: string;
  readonly imageSrc: string;
}

