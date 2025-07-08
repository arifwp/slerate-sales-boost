import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovingText } from "@/components/MovingText";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { HeroSection } from "@/sections/HeroSection";
import { JoinSection } from "@/sections/JoinSection";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <main className="w-full max-w-6xl mx-auto flex flex-col relative overflow-y-auto">
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
