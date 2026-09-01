import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.scss";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Fallera | La Paella ¿Imposible?",
  description: "Hace 10 años conseguimos juntos el paellaemoji. ¿Y si ahora lo usamos para unir a David y Pablo?",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
