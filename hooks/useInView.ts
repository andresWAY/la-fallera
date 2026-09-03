"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Devuelve un ref y un booleano que pasa a true la primera vez que el
 * elemento entra en el viewport (una sola vez, no se revierte al salir) —
 * para disparar animaciones de entrada al hacer scroll, en vez de con
 * delays fijos desde la carga de la página.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
