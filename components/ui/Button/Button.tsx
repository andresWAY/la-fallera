import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type CommonProps = {
  variant?: "solid" | "outline";
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ variant = "solid", children, className, href, ...rest }: ButtonProps) {
  const variantClass = variant === "solid" ? styles.solid : styles.outline;
  const combinedClassName = `${styles.button} ${variantClass} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
