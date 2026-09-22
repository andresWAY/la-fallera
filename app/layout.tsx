import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
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

const TITLE = "La Paella Imposible | La Fallera";
const DESCRIPTION =
  "Celebramos el 10 aniversario del PaellaEmoji convirtiéndolo en un símbolo de unión.";

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
