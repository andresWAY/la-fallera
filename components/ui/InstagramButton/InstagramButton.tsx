"use client";

import type { MouseEvent } from "react";
import Button from "@/components/ui/Button/Button";

const INSTAGRAM_WEB = "https://www.instagram.com/";
// Esquema propio de la app; si no está instalada, no ocurre nada y el
// fallback de abajo se encarga de abrir la web.
const INSTAGRAM_APP = "instagram://app";

type InstagramButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export default function InstagramButton({ className, children }: InstagramButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
    if (!isMobile) return; // en escritorio se sigue el href normal

    event.preventDefault();

    // Si la app se abre, el navegador pasa a segundo plano y el timeout
    // no llega a ejecutarse. Si no, a los 800ms abrimos la web.
    const fallback = window.setTimeout(() => {
      window.location.href = INSTAGRAM_WEB;
    }, 800);

    const cancelFallback = () => {
      if (document.hidden) window.clearTimeout(fallback);
    };
    document.addEventListener("visibilitychange", cancelFallback, { once: true });

    window.location.href = INSTAGRAM_APP;
  };

  return (
    <Button
      variant="solid"
      className={className}
      href={INSTAGRAM_WEB}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
