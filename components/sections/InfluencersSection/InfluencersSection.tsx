import InstagramEmbed from "@/components/ui/InstagramEmbed/InstagramEmbed";
import styles from "./InfluencersSection.module.scss";

// Piezas de los influencers, en orden inverso al que las fue pasando el
// cliente (de la más antigua a la más reciente de su lista).
// Se irán añadiendo más conforme se publiquen.
const INFLUENCER_POST_URLS: string[] = [
  "https://www.instagram.com/p/DdEXDMEspNM/", // javihoyosmartinez
  "https://www.instagram.com/p/DdEersegIC6/", // albacarrillooficial
  "https://www.instagram.com/p/DdEeum6sFkk/", // celimonde
  "https://www.instagram.com/p/DdEfNfTIqLu/", // jacobocabezass
  "https://www.instagram.com/p/DdG43DONR_3/", // sieira10
  "https://www.instagram.com/p/DdHJHWVC1CI/", // vdebonitos
];

export default function InfluencersSection() {
  if (INFLUENCER_POST_URLS.length === 0) {
    return null;
  }

  return (
    <section className={styles.influencers}>
      <div className={styles.influencers__grid}>
        {INFLUENCER_POST_URLS.map((url) => (
          <InstagramEmbed key={url} url={url} />
        ))}
      </div>
    </section>
  );
}
