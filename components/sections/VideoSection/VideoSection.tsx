"use client";

import { useState } from "react";
import Image from "next/image";
import PlayButton from "@/components/ui/PlayButton/PlayButton";
import styles from "./VideoSection.module.scss";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles.videoSection}>
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
    </section>
  );
}
