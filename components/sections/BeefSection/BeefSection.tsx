"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { useInView } from "@/hooks/useInView";
import styles from "./BeefSection.module.scss";

// TODO: sustituir la imagen de fondo por un vídeo en bucle cuando el usuario lo entregue.
export default function BeefSection() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className={`${styles.beef} ${isInView ? styles.beef__inView : ""}`}>
      <Image
        src="/images/beef/fondo-beef.webp"
        alt="Paella servida en la mesa"
        fill
        className={styles.beef__bg}
      />

      <div className={styles.beef__floaters} aria-hidden="true">
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.beef__floater} ${styles.beef__floater1}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.beef__floater} ${styles.beef__floater2}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.beef__floater} ${styles.beef__floater3}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.beef__floater} ${styles.beef__floater4}`} />
      </div>

      <div className={styles.beef__content}>
        <div className={styles.beef__top}>
          <h2 className={styles.beef__heading}>
            Cuando compartes una paella es mucho más fácil digerir nuestras diferencias
          </h2>

          <p className={styles.beef__intro}>
            Y para demostrarlo, vamos a unir a dos personas con un beef que ya dura demasiado:
          </p>

          <p className={styles.beef__names} aria-label="David y Pablo">
            <span className={styles.beef__davidWord} aria-hidden="true">
              DAVID
              <Image
                src="/images/beef/bombo-bandera.webp"
                alt=""
                width={51}
                height={37}
                className={styles.beef__bombo}
              />
            </span>{" "}
            <span aria-hidden="true">Y</span>{" "}
            <span className={styles.beef__pabloWord} aria-hidden="true">
              PABLO
              <Image
                src="/images/beef/hormiga.webp"
                alt=""
                width={38}
                height={32}
                className={styles.beef__ant}
              />
            </span>
          </p>
        </div>

        <div className={styles.beef__bottom}>
          <p className={styles.beef__question}>¿Nos ayudas a conseguirlo?</p>

          <Button variant="solid" className={styles.beef__cta}>
            Inunda Instagram de <span className={styles.beef__ctaEmoji}>🥘</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
