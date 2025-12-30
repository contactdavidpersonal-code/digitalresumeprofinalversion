import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
