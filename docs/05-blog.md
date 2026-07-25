# 05 — Blog

## Enfoque simple (sin CMS pesado)
Para no agregar costo ni complejidad innecesaria, el blog se construye con
archivos Markdown/MDX dentro del propio proyecto Next.js (patrón estándar,
bien documentado) — la dueña edita/agrega posts como archivos de texto, sin
necesidad de un panel de administración separado ni pagar por un CMS externo,
al menos para partir.

Si más adelante se vuelve pesado editar así, se puede migrar a un CMS headless
simple (ej. Notion como backend de contenido, o un CMS liviano) — no es
necesario resolverlo ahora.

## Temas sugeridos para los primeros posts
- Qué es la masa madre y por qué es distinta al pan industrial.
- Beneficios digestivos y por qué es una opción más amigable para personas
  con diabetes o problemas de hinchazón/acidez (mismo contenido que ya usa el
  bot en `mami-pan-bot/docs/01-negocio.md`, ampliado en formato artículo).
- Detrás de escena del proceso artesanal (fotos, storytelling de marca).
- Recetas o ideas de qué comer con cada tipo de pan.

## SEO básico
- Cada post con título, meta descripción, y una imagen destacada.
- URLs limpias (ej: `/blog/que-es-la-masa-madre`).
- Esto ayuda a que el sitio aparezca en búsquedas de Google relacionadas a
  pan de masa madre en Santiago — valioso para adquisición orgánica, en
  complemento al Agente de Marketing (`mami-pan-bot/agentes/marketing/`).
