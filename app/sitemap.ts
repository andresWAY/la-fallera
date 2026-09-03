import type { MetadataRoute } from "next";

// TODO: mantener sincronizado con SITE_URL de app/layout.tsx cuando se
// confirme el dominio de producción.
const SITE_URL = "https://www.lafalleraimposible.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
