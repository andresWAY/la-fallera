"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <footer ref={ref} className={`${styles.footer} ${isInView ? styles.footer__inView : ""}`}>
      <div className={styles.footer__top}>
        <a href="https://www.lafallera.es/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/hero/logo-la-fallera.svg"
            alt="La Fallera"
            width={62}
            height={64}
            className={styles.footer__logo}
          />
        </a>

        <nav className={styles.footer__links} aria-label="Enlaces legales">
          <a
            href="https://www.lafallera.es/politica-de-privacidad/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            Política de privacidad
          </a>
          <a
            href="https://www.lafallera.es/aviso-legal/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            Aviso legal
          </a>
          <a
            href="https://www.lafallera.es/politica-de-cookies/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            Política de cookies
          </a>
        </nav>
      </div>

      <div className={styles.footer__imageWrapper}>
        <Image
          src="/images/hero/icono-paella.webp"
          alt=""
          width={160}
          height={160}
          className={styles.footer__image}
        />
      </div>
    </footer>
  );
}
