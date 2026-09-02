"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button/Button";
import styles from "./StatsSection.module.scss";

export default function StatsSection() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!sticky || !viewport || !track) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let ticking = false;
    let maxTranslate = 0;

    // Hold final: cuando el track llega al final, el scroll se queda
    // "congelado" HOLD_PX adicionales antes de soltar el sticky, para dar
    // tiempo a leer la última tarjeta con calma.
    const HOLD_PX = 100;

    // La altura de la zona "congelada" debe ser justo la altura del viewport
    // (lo que se ve en pantalla mientras dura el hijack) más el recorrido
    // horizontal necesario (maxTranslate) más el hold final — ni más corta
    // (se libera antes de completar el scroll horizontal) ni más larga
    // (deja aire vacío al final).
    const recalculate = () => {
      // Chrome no incluye el padding-right del track en scrollWidth cuando
      // el overflow lo controla un ancestro (aquí .stats__viewport), así que
      // hay que sumarlo a mano para que el margen derecho al terminar quede
      // simétrico al margen izquierdo (padding-left) al empezar.
      const trackPaddingRight = parseFloat(getComputedStyle(track).paddingRight) || 0;
      maxTranslate = Math.max(
        track.scrollWidth + trackPaddingRight - viewport.clientWidth,
        0,
      );
      sticky.style.height = `${viewport.offsetHeight + maxTranslate + HOLD_PX}px`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = sticky.getBoundingClientRect();
        const scrolled = Math.max(-rect.top, 0);
        const progress =
          maxTranslate === 0 ? 0 : Math.min(scrolled, maxTranslate) / maxTranslate;

        track.style.transform = `translateX(-${progress * maxTranslate}px)`;

        ticking = false;
      });
    };

    recalculate();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      recalculate();
      onScroll();
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalculate);
    };
  }, []);

  return (
    <section className={styles.stats}>
      <h2 className={styles.stats__heading}>Hagamos posible la paella imposible</h2>

      <div ref={stickyRef} className={styles.stats__sticky}>
        <div ref={viewportRef} className={styles.stats__viewport}>
          <div ref={trackRef} className={styles.stats__track}>
            <article className={styles.stats__card}>
              <p className={styles.stats__bigStat}>85%</p>
              <p className={styles.stats__bigText}>
                de los españoles opina que compartir una buena paella puede llevar a la gente a
                reconciliarse tras un conflicto.
              </p>
              <div className={styles.stats__row}>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>82%</p>
                  <p className={styles.stats__pillLabel}>Andalucía</p>
                </div>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>76%</p>
                  <p className={styles.stats__pillLabel}>Islas Baleares</p>
                </div>
              </div>
              <div className={styles.stats__row}>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>87%</p>
                  <p className={styles.stats__pillLabel}>Cataluña</p>
                </div>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>81%</p>
                  <p className={styles.stats__pillLabel}>Comunidad de Madrid</p>
                </div>
              </div>
              <div className={styles.stats__row}>
                <div className={`${styles.stats__pill} ${styles.stats__pillFull}`}>
                  <p className={styles.stats__pillStat}>94%</p>
                  <p className={styles.stats__pillLabel}>Comunidad Valenciana</p>
                </div>
              </div>
            </article>

            <article className={styles.stats__card}>
              <p className={styles.stats__bigStat}>54%</p>
              <p className={styles.stats__bigText}>
                de los españoles ha limado asperezas o resuelto conflictos con una paella en la
                mesa.
              </p>
              <div className={styles.stats__row}>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>67%</p>
                  <p className={styles.stats__pillLabel}>18 a 24 años</p>
                </div>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>62%</p>
                  <p className={styles.stats__pillLabel}>25 a 34 años</p>
                </div>
              </div>
              <div className={styles.stats__row}>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>53%</p>
                  <p className={styles.stats__pillLabel}>35 a 44 años</p>
                </div>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>53%</p>
                  <p className={styles.stats__pillLabel}>45 a 54 años</p>
                </div>
              </div>
              <div className={styles.stats__row}>
                <div className={`${styles.stats__pill} ${styles.stats__pillFull}`}>
                  <p className={styles.stats__pillStat}>44%</p>
                  <p className={styles.stats__pillLabel}>55 a 65 años</p>
                </div>
              </div>
            </article>

            <article className={styles.stats__card}>
              <p className={styles.stats__bigStat}>89%</p>
              <p className={styles.stats__bigText}>
                de los españoles lo ha pasado bien con gente que piensa distinto mientras comían
                una paella, independientemente de sus gustos.
              </p>
              <div className={styles.stats__row}>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>90%</p>
                  <p className={styles.stats__pillLabel}>ve El Hormiguero</p>
                </div>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>88%</p>
                  <p className={styles.stats__pillLabel}>ve La Revuelta</p>
                </div>
              </div>
              <div className={styles.stats__row}>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>88%</p>
                  <p className={styles.stats__pillLabel}>ve El Intermedio</p>
                </div>
                <div className={styles.stats__pill}>
                  <p className={styles.stats__pillStat}>90%</p>
                  <p className={styles.stats__pillLabel}>ve First Dates</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <p className={styles.stats__disclaimer}>
        Datos extraídos de &ldquo;La Paella, el plato que une a todos los españoles&rdquo; un
        estudio impulsado por arroz La Fallera a través de una muestra de 1000 personas entre 18 y
        65 años.
      </p>

      <Button variant="solid" className={styles.stats__cta}>
        Descárgate el estudio
      </Button>
    </section>
  );
}
