import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovingText } from "@/components/MovingText";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { HeroSection } from "@/sections/HeroSection";
import { JoinSection } from "@/sections/JoinSection";

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
