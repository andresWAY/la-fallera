"use client";

import { useEffect, useRef } from "react";
import styles from "./InstagramEmbed.module.scss";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

type InstagramEmbedProps = {
  /** URL completa del post o reel, ej. https://www.instagram.com/p/XXXXXXXXXXX/ */
  url: string;
};

const SCRIPT_SRC = "https://www.instagram.com/embed.js";

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      process();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", process);
      return () => existingScript.removeEventListener("load", process);
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", process);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", process);
  }, [url]);

  return (
    <div ref={containerRef} className={styles.embed}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      />
    </div>
  );
}
