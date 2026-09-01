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
        className={styles.hero__bg}
      />

      <div className={styles.hero__content}>
        <div className={styles.hero__top}>
          <Image
            src="/images/hero/logo-la-fallera.svg"
            alt="La Fallera"
            width={62}
            height={64}
            className={styles.hero__logo}
            priority
          />

          <p className={styles.hero__presents}>PRESENTA</p>

          <h1 className={styles.hero__title} aria-label="LA PAELLA ¿IMPOSIBLE?">
            <span className={styles.hero__line} aria-hidden="true">
              <span className={styles.hero__paellaWord}>
                LA PAELLA
                <Image
                  src="/images/hero/icono-paella.webp"
                  alt=""
                  width={32}
                  height={32}
                  className={styles.hero__paellaIcon}
                />
              </span>
            </span>
            <span className={styles.hero__line} aria-hidden="true">
              <span className={styles.hero__questionMark}>¿</span>
              <span className={styles.hero__impossibleText}>IMPOSIBLE</span>
              <span className={styles.hero__questionMark}>?</span>
            </span>
          </h1>
        </div>

        <div className={styles.hero__bottom}>
          <p className={styles.hero__paragraph}>
            Hace 10 años conseguimos juntos el <strong>paellaemoji</strong>.
            ¿Y si ahora lo usamos para unir a David y Pablo?
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
