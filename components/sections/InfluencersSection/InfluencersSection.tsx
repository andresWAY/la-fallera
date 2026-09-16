import InstagramEmbed from "@/components/ui/InstagramEmbed/InstagramEmbed";
import styles from "./InfluencersSection.module.scss";

// Piezas de los influencers, en el orden pedido por el cliente: la de
// Wikipaella con José Andrés abre la sección y el resto va a continuación
// de las que ya estaban. Se irán añadiendo más conforme se publiquen.
// Las URLs van sin el parámetro ?stkn= con el que llegan al compartirlas:
// es un token de sesión de quien comparte y el embed no lo necesita.
const INFLUENCER_POST_URLS: string[] = [
  "https://www.instagram.com/reel/DdQw23ts6dI/", // Wikipaella con José Andrés
  "https://www.instagram.com/p/DdEXDMEspNM/", // javihoyosmartinez
  "https://www.instagram.com/p/DdEersegIC6/", // albacarrillooficial
  "https://www.instagram.com/p/DdEeum6sFkk/", // celimonde
  "https://www.instagram.com/p/DdEfNfTIqLu/", // jacobocabezass
  "https://www.instagram.com/p/DdG43DONR_3/", // sieira10
  "https://www.instagram.com/p/DdHJHWVC1CI/", // vdebonitos
  "https://www.instagram.com/reel/DdJZ2ARtGnK/",
  "https://www.instagram.com/reel/DdJk5HMIgBH/",
  "https://www.instagram.com/reel/DdRMb9KorvA/",
  "https://www.instagram.com/reel/DdUSASUNart/",
  "https://www.instagram.com/reel/DdTwMpAsZz7/",
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
