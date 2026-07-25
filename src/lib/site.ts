// El dominio del sitio todavía está pendiente (ver CLAUDE.md, "Dominio y
// hosting"). Mientras tanto usamos localhost para que metadataBase/sitemap
// no truenen — configurar NEXT_PUBLIC_SITE_URL con el dominio real antes
// de publicar el sitio.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
