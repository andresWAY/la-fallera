/**
 * Rutas de los vídeos y portadas de la v2.
 *
 * Los vídeos están comprimidos desde los másters de edición (1080x1350 a
 * 10-23 Mbps) a 720x900 con H.264 CRF 26 y faststart, que es la resolución
 * a la que se muestran realmente en el bloque.
 *
 * Las portadas van a 1080x1350 (4:5), el doble del tamaño de display para
 * pantallas retina y la misma proporción que el bloque: las anteriores
 * eran 9:16 y el navegador recortaba un 30% de la imagen.
 */

export const VIDEOS = {
  /** Teaser: la oficina, el cajón de las revistas y Sobera en el camerino. */
  teaser: {
    src: "/video/teaser.mp4",
    poster: "/images/video/portada-teaser.webp",
    posterAlt: "Carlos Sobera sentado en el camerino leyendo una revista",
  },
  /** El reto a David y Pablo. La portada es la foto de Carlos con Conxa
   *  y el PaellaEmoji que pide el brief, heredada del vídeo original. */
  reto: {
    src: "/video/reto.mp4",
    poster: "/images/video/portada-reto.webp",
    posterAlt: "Carlos Sobera y Conxa sosteniendo un PaellaEmoji",
  },
  /** Resolución: nace el PaellaEmoji Express. */
  resolucion: {
    src: "/video/resolucion.mp4",
    poster: "/images/video/portada-resolucion.webp",
    posterAlt: "Repartidor del PaellaEmoji Express con su casco",
  },
} as const;
