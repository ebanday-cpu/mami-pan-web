import type { MetadataRoute } from "next";
import { PRODUCTOS } from "@/lib/negocio";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasFijas: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/catalogo`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${SITE_URL}/preguntas-frecuentes`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${SITE_URL}/politicas`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${SITE_URL}/politicas/terminos-y-condiciones`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politicas/privacidad`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politicas/envios`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/politicas/cambios-y-devoluciones`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const productos: MetadataRoute.Sitemap = PRODUCTOS.map((producto) => ({
    url: `${SITE_URL}/catalogo/${producto.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...paginasFijas, ...productos, ...posts];
}
