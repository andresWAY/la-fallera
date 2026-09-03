import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
          src="/images/footer/paella-footer.webp"
          alt="Paella servida en una sartén"
          fill
          className={styles.footer__image}
        />
      </div>
    </footer>
  );
}
