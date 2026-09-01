import type { ButtonHTMLAttributes } from "react";
import styles from "./PlayButton.module.scss";

type PlayButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PlayButton({ className, ...rest }: PlayButtonProps) {
  return (
    <button className={`${styles.playButton} ${className ?? ""}`} aria-label="Reproducir vídeo" {...rest}>
      <svg viewBox="0 0 24 24" className={styles.playButton__icon} aria-hidden="true">
        <path d="M7.33 4v16l14-8z" />
      </svg>
    </button>
  );
}
