import InstagramEmbed from "@/components/ui/InstagramEmbed/InstagramEmbed";
import styles from "./InfluencersSection.module.scss";

// TODO: sustituir por las URLs reales de los posts/reels de los influencers
// en cuanto el usuario las entregue. Formato: https://www.instagram.com/p/XXXXX/
// o https://www.instagram.com/reel/XXXXX/
const INFLUENCER_POST_URLS: string[] = [];

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
