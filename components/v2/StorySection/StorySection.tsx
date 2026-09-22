"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import styles from "./StorySection.module.scss";

type StorySectionProps = {
  /** Titular del bloque, en verde y tipografía display. */
  heading: ReactNode;
  /** Párrafo de apoyo bajo el titular. Opcional: hay bloques que van solo con titular. */
  body?: ReactNode;
  /** Emojis flotantes de fondo. Se desactivan en los bloques que van pegados
   *  a un vídeo para no competir con la portada. */
  floaters?: boolean;
  className?: string;
};

/**
 * Bloque de texto narrativo de la v2 (titular + párrafo), con entrada
 * animada al hacer scroll. Los cuatro capítulos de la historia — Sobera,
 * el reto, el Express y el cierre — comparten este componente.
 */
export default function StorySection({
  heading,
  body,
  floaters = true,
  className,
}: StorySectionProps) {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${styles.story} ${isInView ? styles.story__inView : ""} ${className ?? ""}`}
    >
      {floaters && (
        <div className={styles.story__floaters} aria-hidden="true">
          <Image src="/images/hero/icono-paella.webp" alt="" width={30} height={30} className={`${styles.story__floater} ${styles.story__floater1}`} />
          <Image src="/images/hero/icono-paella.webp" alt="" width={36} height={36} className={`${styles.story__floater} ${styles.story__floater2}`} />
          <Image src="/images/hero/icono-paella.webp" alt="" width={28} height={28} className={`${styles.story__floater} ${styles.story__floater3}`} />
        </div>
      )}

      <div className={styles.story__content}>
        <h2 className={styles.story__heading}>{heading}</h2>
        {body && <p className={styles.story__body}>{body}</p>}
      </div>
    </section>
  );
}
