"use client";

import { useState } from "react";
import Image from "next/image";
import PlayButton from "@/components/ui/PlayButton/PlayButton";
import styles from "./VideoBlock.module.scss";

type VideoBlockProps = {
  /** Ruta del mp4 en /public. */
  src: string;
  /** Imagen de portada que se ve antes de darle al play. */
  poster: string;
  /** Alt de la portada — describe el frame, no el vídeo. */
  posterAlt: string;
  className?: string;
};

/**
 * Vídeo con portada y botón de play. Generaliza el VideoSection de la
 * versión de campaña, que tenía la fuente y la portada escritas a fuego:
 * la v2 monta tres vídeos distintos con este mismo componente.
 */
export default function VideoBlock({ src, poster, posterAlt, className }: VideoBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`${styles.videoBlock} ${className ?? ""}`}>
      <div className={styles.videoBlock__floaters} aria-hidden="true">
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.videoBlock__floater} ${styles.videoBlock__floater1}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={42} height={42} className={`${styles.videoBlock__floater} ${styles.videoBlock__floater2}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={42} height={42} className={`${styles.videoBlock__floater} ${styles.videoBlock__floater3}`} />
      </div>

      <div className={styles.videoBlock__frame}>
        {isPlaying ? (
          <video
            className={styles.videoBlock__video}
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            // Sin esto el navegador descarga los tres vídeos de la página
            // (unos 20 MB) nada más cargarla, aunque no se reproduzca
            // ninguno: cada uno se baja solo cuando se pulsa play.
            preload="none"
          />
        ) : (
          <>
            <Image
              src={poster}
              alt={posterAlt}
              fill
              className={styles.videoBlock__poster}
            />
            <PlayButton
              className={styles.videoBlock__playButton}
              onClick={() => setIsPlaying(true)}
            />
          </>
        )}
      </div>
    </section>
  );
}
