import HeroV2 from "@/components/v2/HeroV2/HeroV2";
import StorySection from "@/components/v2/StorySection/StorySection";
import VideoBlock from "@/components/v2/VideoBlock/VideoBlock";
import { VIDEOS } from "@/components/v2/assets";
import StatsSection from "@/components/sections/StatsSection/StatsSection";
import InfluencersSection from "@/components/sections/InfluencersSection/InfluencersSection";
import Footer from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeroV2 />

      <StorySection
        heading="Y si hablamos de unión, nadie como Carlos Sobera para echarnos una mano."
        body="Usamos el comodín de la llamada con el presentador de First Dates, que lleva años juntando a gente de todo tipo, y seguro que a él se le ocurre algo."
      />

      <VideoBlock {...VIDEOS.teaser} />

      <StorySection
        heading="Convertimos en reto la reconciliación que España lleva años esperando."
        body="David Broncano y Pablo Motos llevan demasiado tiempo enfrentados. ¿Qué tal si usamos el PaellaEmoji para invitarles a sentarse a la mesa y digerir sus diferencias con una paella?"
      />

      <VideoBlock {...VIDEOS.reto} />

      <InfluencersSection />

      <StorySection
        heading="Nace el PaellaEmoji Express, el servicio para unir a la gente a domicilio."
        body="David y Pablo no aceptan el reto, pero juntos hemos conseguido convertir el PaellaEmoji en un símbolo de unión. Y como hay muchas paellas imposibles que merecen ser enviadas a esas personas que necesitan limar asperezas, hemos creado el PaellaEmoji Express."
      />

      <VideoBlock {...VIDEOS.resolucion} />

      {/* El cierre y las gráficas van juntos: StatsSection ya trae el
          disclaimer del estudio y el CTA de descarga. */}
      <StatsSection
        heading="Porque cuando compartes una paella es mucho más fácil digerir nuestras diferencias"
        longHeading
      />

      <Footer note="El emoji de la paella es el único de origen español y el primero aceptado por petición popular e impulsado por una marca. En 2016 unió internet y diez años después, lo hemos convertido en un símbolo de unión." />
    </main>
  );
}
