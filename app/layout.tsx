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

// TODO: sustituir por el dominio de producción real en cuanto se confirme.
// Todas las URLs absolutas (OG image, canonical, sitemap) se calculan a
// partir de este valor.
const SITE_URL = "https://www.lafalleraimposible.com";

const TITLE = "La Paella ¿Imposible? | La Fallera";
const DESCRIPTION =
  "Hace 10 años conseguimos juntos el paellaemoji. ¿Y si ahora lo usamos para unir a David y Pablo?";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "La Fallera",
    images: [
      {
        url: "/images/og/cover.jpg",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og/cover.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
