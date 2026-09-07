import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero/hero-mesa-paella.webp"
        alt="Mesa con una paella servida entre dos sillas rojas"
        fill
        priority
        className={`${styles.hero__bg} ${styles.hero__bgMobile}`}
      />
      <Image
        src="/images/hero/hero-mesa-paella-desktop.webp"
        alt="Mesa con una paella servida entre dos sillas rojas"
        fill
        priority
        className={`${styles.hero__bg} ${styles.hero__bgDesktop}`}
      />

      <div className={styles.hero__floaters} aria-hidden="true">
        <Image src="/images/hero/icono-paella.webp" alt="" width={30} height={30} className={`${styles.hero__floater} ${styles.hero__floater1}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={38} height={38} className={`${styles.hero__floater} ${styles.hero__floater2}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={34} height={34} className={`${styles.hero__floater} ${styles.hero__floater3}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={42} height={42} className={`${styles.hero__floater} ${styles.hero__floater4}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={28} height={28} className={`${styles.hero__floater} ${styles.hero__floater5}`} />

        {/* Solo desktop: aprovechan el espacio lateral que en móvil no existe. */}
        <Image src="/images/hero/icono-paella.webp" alt="" width={36} height={36} className={`${styles.hero__floater} ${styles.hero__floaterDesktop} ${styles.hero__floater6}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={30} height={30} className={`${styles.hero__floater} ${styles.hero__floaterDesktop} ${styles.hero__floater7}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={44} height={44} className={`${styles.hero__floater} ${styles.hero__floaterDesktop} ${styles.hero__floater8}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.hero__floater} ${styles.hero__floaterDesktop} ${styles.hero__floater9}`} />
      </div>

      <div className={styles.hero__content}>
        <div className={styles.hero__top}>
          <a href="https://www.lafallera.es/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/hero/logo-la-fallera.svg"
              alt="La Fallera"
              width={62}
              height={64}
              className={styles.hero__logo}
              priority
            />
          </a>

          <p className={styles.hero__presents}>PRESENTA</p>

          <h1 className={styles.hero__title} aria-label="LA PAELLA ¿IMPOSIBLE?">
            <span className={styles.hero__line} aria-hidden="true">
              LA PAELLA
            </span>{" "}
            <span className={styles.hero__line} aria-hidden="true">
              <span className={styles.hero__questionMark}>¿</span>
              <span className={styles.hero__impossibleText}>IMPOSIBLE</span>
              <span className={styles.hero__questionMark}>?</span>
            </span>
          </h1>
        </div>

        <div className={styles.hero__bottom}>
          <p className={styles.hero__paragraph}>
            Hace 10 años conseguimos juntos el PaellaEmoji.{" "}
            <strong>¿Y si ahora lo usamos para unir a David y Pablo?</strong>
          </p>

          <div className={styles.hero__ctas}>
            <Button variant="solid">Inunda Instagram de Paellaemojis</Button>
          </div>

          <div className={styles.hero__chevrons} aria-hidden="true">
            <img src="/images/hero/chevron-1.svg" alt="" className={styles.hero__chevron1} />
            <img src="/images/hero/chevron-2.svg" alt="" className={styles.hero__chevron2} />
          </div>
        </div>
      </div>
    </section>
  );
}
