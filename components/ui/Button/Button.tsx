import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  children: ReactNode;
};

export default function Button({ variant = "solid", children, className, ...rest }: ButtonProps) {
  const variantClass = variant === "solid" ? styles.solid : styles.outline;
  return (
    <button className={`${styles.button} ${variantClass} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}
