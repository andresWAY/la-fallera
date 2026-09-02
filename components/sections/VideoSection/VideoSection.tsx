"use client";

import { useState } from "react";
import Image from "next/image";
import PlayButton from "@/components/ui/PlayButton/PlayButton";
import styles from "./VideoSection.module.scss";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles.videoSection}>
      <div className={styles.videoSection__floaters} aria-hidden="true">
        <Image src="/images/hero/icono-paella.webp" alt="" width={32} height={32} className={`${styles.videoSection__floater} ${styles.videoSection__floater1}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={42} height={42} className={`${styles.videoSection__floater} ${styles.videoSection__floater2}`} />
        <Image src="/images/hero/icono-paella.webp" alt="" width={42} height={42} className={`${styles.videoSection__floater} ${styles.videoSection__floater3}`} />
      </div>

      <div className={styles.videoSection__frame}>
        {isPlaying ? (
          <video
            className={styles.videoSection__video}
            src="/video/paella-imposible-spot.mp4"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <>
            <Image
              src="/images/video/portada-video.webp"
              alt="David y Pablo sosteniendo el paellaemoji"
              fill
              className={styles.videoSection__poster}
            />
            <PlayButton
              className={styles.videoSection__playButton}
              onClick={() => setIsPlaying(true)}
            />
          </>
        )}
      </div>
    </section>
  );
}
