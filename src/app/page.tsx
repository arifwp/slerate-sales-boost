import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovingText } from "@/components/MovingText";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { HeroSection } from "@/sections/HeroSection";
import { JoinSection } from "@/sections/JoinSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slerate — Accelerate Your Sales at Lightning Speed",
  description:
    "Boost your sales productivity with real-time insights, smart automation, and seamless integrations. Join 15,000+ teams scaling faster with Slerate.",
  keywords: [
    "Sales Automation",
    "CRM",
    "Sales Platform",
    "SaaS",
    "Sales Productivity",
    "Real-Time Analytics",
    "Sales Team Tool",
    "Slerate",
  ],
  openGraph: {
    title: "Slerate — Accelerate Your Sales at Lightning Speed",
    description:
      "Take your sales team to the next level with Slerate Sales Boost. Real-time insights, automation, and intelligent outreach built for growth.",
    url: "https://slerate-sales-boost-green.vercel.app/",
    siteName: "Slerate",
    images: [
      {
        url: "https://slerate-sales-boost-green.vercel.app/assets/slerate-logo.webp",
        width: 1200,
        height: 630,
        alt: "Slerate OpenGraph Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slerate — Accelerate Your Sales at Lightning Speed",
    description:
      "Smarter sales start here. Join 15,000+ teams scaling with Slerate.",
    images: [
      "https://slerate-sales-boost-green.vercel.app/assets/slerate-logo.webp",
    ],
  },
  metadataBase: new URL("https://slerate-sales-boost-green.vercel.app/"),
};

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <main className="w-full mx-auto flex flex-col relative">
        <Header />

        <HeroSection />

        <MovingText />

        <FeaturesSection />

        <JoinSection />

        <Footer />
      </main>
    </div>
  );
}
