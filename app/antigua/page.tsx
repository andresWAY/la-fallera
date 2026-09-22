import type { Metadata } from "next";
import Hero from "@/components/sections/Hero/Hero";
import VideoSection from "@/components/sections/VideoSection/VideoSection";
import BeefSection from "@/components/sections/BeefSection/BeefSection";
import StatsSection from "@/components/sections/StatsSection/StatsSection";
import InfluencersSection from "@/components/sections/InfluencersSection/InfluencersSection";
import Footer from "@/components/sections/Footer/Footer";

// Versión de campaña, archivada al terminar la acción. Se conserva como
// referencia, pero no debe indexarse ni competir con la home actual.
export const metadata: Metadata = {
  title: "La Paella ¿Imposible? | La Fallera",
  description:
    "Hace 10 años conseguimos juntos el paellaemoji. ¿Y si ahora lo usamos para unir a David y Pablo?",
  robots: { index: false, follow: false },
};

export default function AntiguaPage() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <BeefSection />
      <StatsSection />
      <InfluencersSection />
      <Footer />
    </main>
  );
}
