import type { MetadataRoute } from "next";

// TODO: mantener sincronizado con SITE_URL de app/layout.tsx cuando se
// confirme el dominio de producción.
const SITE_URL = "https://www.lafalleraimposible.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
