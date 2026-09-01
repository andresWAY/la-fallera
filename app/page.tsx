import Hero from "@/components/sections/Hero/Hero";
import VideoSection from "@/components/sections/VideoSection/VideoSection";
import BeefSection from "@/components/sections/BeefSection/BeefSection";
import StatsSection from "@/components/sections/StatsSection/StatsSection";
import InfluencersSection from "@/components/sections/InfluencersSection/InfluencersSection";
import Footer from "@/components/sections/Footer/Footer";

export default function Home() {
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
