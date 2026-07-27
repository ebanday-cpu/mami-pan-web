import { PRODUCTOS, ENVIO, MARCA, EMPRESA, COMUNAS_COBERTURA, formatearPrecio, TEXTO_GLUTEN, NO_APTO_CELIACOS, BENEFICIOS } from "@/lib/negocio";
import { getAllPosts } from "@/lib/blog";
import { FAQ } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function build(): string {
  const productos = PRODUCTOS.map(
    (p) =>
      `- [${p.nombre}](${SITE_URL}/catalogo/${p.slug}): ${formatearPrecio(p.precio)}. ${p.resumen}`
  ).join("\n");

  const posts = getAllPosts()
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");

  const faq = FAQ.map((item) => `- **${item.pregunta}** ${item.respuesta}`).join("\n");

  return `# ${MARCA.nombre}

> Panadería online de pan de masa madre artesanal en Santiago de Chile. Venta y despacho a domicilio, sin local físico ni WhatsApp de por medio — carrito y checkout propios del sitio.

${MARCA.nombre} vende pan de masa madre 100% natural, fermentado lentamente durante casi 48 horas, sin levadura comercial ni conservantes. Despacha solo en ${ENVIO.region} (${COMUNAS_COBERTURA.length} comunas), ${ENVIO.dias.toLowerCase()}, en la ventana de ${ENVIO.ventana}. Costo de envío ${formatearPrecio(ENVIO.costoBase)}, gratis desde ${ENVIO.gratisDesdeUnidades} panes.

${TEXTO_GLUTEN} ${NO_APTO_CELIACOS} ${BENEFICIOS.join(" ")}

## Identidad legal
${MARCA.nombre} es operado por ${EMPRESA.razonSocial}, RUT ${EMPRESA.rut}, empresa formalizada en Chile. Detalle de políticas en ${SITE_URL}/politicas.

## Productos
${productos}

## Comunas con despacho (Región Metropolitana)
${COMUNAS_COBERTURA.join(", ")}.

## Preguntas frecuentes
${faq}

## Blog
${posts}

## Páginas
- [Catálogo](${SITE_URL}/catalogo)
- [Preguntas frecuentes](${SITE_URL}/preguntas-frecuentes)
- [Blog](${SITE_URL}/blog)
- [Políticas](${SITE_URL}/politicas): términos y condiciones, privacidad, envíos, cambios y devoluciones.
- Instagram: ${MARCA.instagramUrl}
`;
}

export async function GET() {
  return new Response(build(), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
