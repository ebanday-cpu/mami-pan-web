Vamos a construir el sitio web de Mami Pan (venta de pan de masa madre).
Antes de escribir código:

1. Lee completo CLAUDE.md — en particular la sección "Fuente de datos reales
   del negocio": nunca leas archivos dentro de `mami-pan-bot/` (ni `docs/`,
   ni `.env`, ni nada), aunque el acceso al disco lo permita técnicamente.
   Es una carpeta ajena que además guarda secretos y datos de clientes.
2. Lee todo docs/ — especialmente 00-datos-negocio-actual.md (precios,
   envío, comunas con cobertura y textos oficiales reales — es la única
   fuente que debes usar para estos datos; no los reescribas de memoria ni
   vayas a buscarlos a `mami-pan-bot/`), 02-arquitectura-web.md (cómo se
   conecta este sitio con el bot/CRM sin duplicar datos) y
   03-diseno-y-marca.md (dirección visual — quiero un nivel de diseño de
   panadería artesanal fina, no una plantilla genérica de e-commerce).

Contexto de mi situación:
- Todavía no elegí ni registré una pasarela de pago (ver
  docs/04-pasarela-pago-pendiente.md) — así que por ahora construye Home,
  catálogo y blog SIN checkout funcional. Deja el botón de "comprar"
  preparado pero no conectado a un pago real todavía.
- Todavía no existe la API interna del bot que este sitio necesita para
  crear pedidos — cuando lleguemos a esa parte, avísame explícitamente que
  hay que construirla primero del lado de mami-pan-bot.
- Ya tengo las 3 fotos de producto (pan blanco, integral, con semillas) —
  están en mami-pan-bot/assets/fotos-productos/. Copiar exactamente esos 3
  archivos de imagen hacia este proyecto es la única excepción permitida a
  la regla de no tocar `mami-pan-bot/` — no explores el resto de esa
  carpeta ni leas otros archivos suyos.
- La venta es solo para Región Metropolitana, con la misma empresa de
  despacho externa que ya usa el bot.

Lo que necesito que construyas, en este orden:
1. Estructura base del proyecto (Next.js) siguiendo docs/02-arquitectura-web.md.
2. Home — nivel de diseño alto, fotografía de producto como protagonista,
   storytelling de la marca (masa madre, artesanal). Usa la skill de diseño
   frontend para no caer en un look genérico.
3. Página de catálogo y de producto individual (sin checkout aún).
4. Blog (estructura Markdown/MDX, con 2-3 posts de ejemplo según
   docs/05-blog.md).
5. Botón/enlace visible al bot de WhatsApp en el header o como botón flotante.

No avances a construir el checkout ni la integración de pago hasta que te
confirme que ya elegí y registré la pasarela. Antes de cada paso grande,
cuéntame qué vas a hacer y por qué, en lenguaje simple.
