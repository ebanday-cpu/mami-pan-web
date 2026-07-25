# CLAUDE.md — Contexto maestro del proyecto web de Mami Pan

## Qué estamos construyendo
Un sitio web para Mami Pan (venta de pan de masa madre) con:
- Home elegante, nivel panaderías artesanales finas internacionales.
- Catálogo con los 3 productos (pan blanco, integral, con semillas).
- **Carrito y checkout propios del sitio, tipo ecommerce real (estilo
  Shopify)** — sin WhatsApp de por medio en ningún punto de la compra. El
  pago final espera la pasarela elegida (ver
  `docs/04-pasarela-pago-pendiente.md`), pero el carrito, el checkout y el
  formulario de despacho ya son reales, no un atajo por WhatsApp.
- Blog.
- Venta restringida a Región Metropolitana (mismo despacho por empresa privada
  externa que ya usa el bot).

## El sitio NO usa WhatsApp para nada relacionado a la compra
⚠️ Se intentó en una iteración anterior usar un link de WhatsApp
precargado como reemplazo temporal del checkout — el usuario pidió
eliminarlo por completo: el sitio es ecommerce real, con carrito y
checkout propios, no un puente a una conversación de WhatsApp. No
reintroducir botones de "Pedir/Comprar por WhatsApp" en ninguna página.

## Los dos números de WhatsApp del ecosistema (contexto, no usado por el sitio)
- **Paula** (humana) atiende un número y toma pedidos reales manualmente.
- **Pancracio** (el bot) corre en un **número distinto**, con un guion
  armado para llevar a la venta (discurso de ventas, no de soporte ni
  dudas generales) — su sistema agenda y luego se concilia con los pedidos
  que Paula toma a mano.
- Esto es solo contexto del ecosistema (para no confundir ambos números si
  se menciona alguno) — **el sitio no enlaza a ninguno de los dos**. Ver el
  detalle en `docs/00-datos-negocio-actual.md`.

## Relación con el resto del ecosistema Mami Pan
Este es un proyecto de código **separado** del bot (`mami-pan-bot/`), porque
es otra tecnología (frontend de comercio electrónico vs. backend de webhook).
Pero comparte la misma base de datos de clientes/pedidos — la regla de oro
del ecosistema completo es **un solo CRM**, sin duplicar datos de clientes en
ningún lugar.

**Cómo se conectan sin duplicar datos:** este sitio NUNCA se conecta directo
a la base de datos Postgres del bot. En vez de eso, llama a una API interna
que expone el backend del bot (o un backend compartido) para:
- Crear/actualizar clientes y pedidos.
- Consultar comunas con cobertura (la misma lista que usa el bot).
- Confirmar disponibilidad de despacho.

⚠️ Esa API interna probablemente no existe todavía en `mami-pan-bot/` — hay
que construirla ahí primero (o en paralelo) antes de que este sitio pueda
escribir pedidos reales. Ver `docs/02-arquitectura-web.md`.

## Fuente de datos reales del negocio
`mami-pan-web/` y `mami-pan-bot/` son carpetas de código **separadas**, y
esa separación es intencional: `mami-pan-bot/` contiene secretos (`.env`,
tokens de Meta/Anthropic/Google) y datos operativos de clientes que no
deben mezclarse con este proyecto.

⚠️ **Regla dura, no un límite técnico:** aunque el entorno donde corre
Claude Code pueda tener acceso de lectura al disco completo y por lo tanto
sea *técnicamente* posible abrir archivos dentro de `mami-pan-bot/`, **eso
nunca debe hacerse desde este proyecto** — ni `docs/`, ni `.env`, ni `src/`,
ni ningún otro archivo de esa carpeta. Trátala como si fuera un repositorio
ajeno. Motivo: evita filtrar secretos o datos de clientes hacia el contexto
de este proyecto, y mantiene la arquitectura de "un solo CRM" honesta (los
datos fluyen por la API interna que se construya, o por copia manual
explícita del usuario — nunca por lectura directa entre carpetas).

Para precios, productos, envío, textos oficiales (gluten, beneficios) y la
lista de comunas con cobertura, **siempre usa
`docs/00-datos-negocio-actual.md`** — es la copia local y la única fuente
de verdad para este proyecto. Si ese archivo no existe, falta un dato, o
parece desactualizado, pregunta al usuario y pídele que lo actualice él
mismo (copiando desde `mami-pan-bot/`) en vez de ir a leerlo directamente.
No inventes estos datos de memoria.

## Estructura de carpetas
```
mami-pan-web/
├── CLAUDE.md                        ← este archivo
├── docs/
│   ├── 00-datos-negocio-actual.md    ← datos reales: precios, envío, comunas, textos oficiales
│   ├── 01-alcance-y-paginas.md       ← qué páginas y funcionalidades exactas
│   ├── 02-arquitectura-web.md        ← stack técnico y conexión con el bot/CRM
│   ├── 03-diseno-y-marca.md          ← dirección visual/estética
│   ├── 04-pasarela-pago-pendiente.md ← decisión de pasarela de pago (pendiente)
│   └── 05-blog.md                    ← estructura del blog
├── src/                               ← código (Claude Code lo crea)
└── PROMPT_INICIAL_WEB.md              ← prompt para arrancar con Claude Code
```

## Estado actual — pendientes antes de construir en serio
- [ ] Elegir pasarela de pago (Transbank Webpay, Flow, MercadoPago — ver
      `docs/04-pasarela-pago-pendiente.md`) y completar el registro como
      comercio, que toma días/semanas. El carrito y el checkout (formulario
      de despacho + resumen de pedido) ya están construidos en el sitio —
      solo falta conectar el paso de pago real cuando exista la pasarela.
- [x] Lista exacta de comunas con cobertura — ya está en
      `docs/00-datos-negocio-actual.md` (35 comunas, misma fuente que usa el
      bot). Si cambia, se actualiza primero en `mami-pan-bot/` y se propaga
      acá.
- [ ] Dominio y hosting del sitio (ver `docs/02-arquitectura-web.md`). Una
      vez elegido, configurar `NEXT_PUBLIC_SITE_URL` (usado en
      `src/lib/site.ts` para metadata, Open Graph y `sitemap.xml`) — hoy
      cae de respaldo a `http://localhost:3000`.
- [x] Fotografía de producto — las 3 fotos (`public/productos/*.jpg`) fueron
      mejoradas con IA (Higgsfield, modelo `marketing_studio_image`) a partir
      de las fotos reales originales, manteniendo el pan fiel al real y
      cambiando solo el entorno/luz (mesa de madera, lino, luz de ventana).
      Las fotos reales originales sin tocar quedaron respaldadas en
      `referencias diseño/pruebas-fotos-ia/00-original-*.jpg`, junto con
      todas las iteraciones intermedias. También se generó una foto propia
      para el post de blog "Cómo conservar tu pan"
      (`public/blog/como-conservar.jpg`). Sigue pendiente foto propia para
      los otros 2 posts del blog (hoy reutilizan las fotos de producto).
      Excepción puntual a la regla de no tocar `mami-pan-bot/`: copiar los
      3 archivos de imagen originales con nombre exacto (`pan-blanco.jpg`,
      `pan-integral.jpg`, `pan-semillas.jpg`) hacia este proyecto sí está
      permitido cuando el usuario lo pida explícitamente — es una copia
      puntual de binarios ya autorizada, no una exploración de la carpeta
      ni una lectura de sus documentos/secretos.
- [x] Logo — `public/marca/logo.png` (recortado a círculo con fondo
      transparente desde el archivo que subió el usuario), ya integrado en
      Header, Footer, favicon y apple-touch-icon.
- [ ] Construir la API interna del bot que este sitio va a consumir (trabajo
      del lado de `mami-pan-bot/`, no de este proyecto).

## Nota técnica: caché de imágenes de Next.js al reemplazar archivos en `public/`
Si reemplazas un archivo de imagen en `public/` (mismo nombre, contenido
nuevo) y el sitio en dev sigue mostrando la versión vieja en algunos
tamaños, no es un error de código — es el caché en disco de
`/_next/image` (`.next/cache/images`) sirviendo variantes ya generadas
para ese ancho específico sin revalidar contra el archivo nuevo. Solución:
`rm -rf .next` y reiniciar `npm run dev`. Verificado en Next.js 16.2.11.

## Reglas no negociables
- No duplicar clientes/pedidos en una base de datos propia de este sitio.
- No vender/despachar fuera de Región Metropolitana.
- **Nunca leer ni acceder a archivos dentro de `mami-pan-bot/`** desde este
  proyecto (ver "Fuente de datos reales del negocio" arriba) — ni siquiera
  `docs/`, aunque el acceso sea técnicamente posible. Los datos de negocio
  reales viven en `docs/00-datos-negocio-actual.md`, actualizado a mano por
  el usuario.
- Aplican los mismos principios de seguridad que el bot documenta en su
  propio `mami-pan-bot/docs/11-seguridad.md` (secretos fuera del código y
  fuera de git, HTTPS, validar todo lo que venga del usuario, nunca exponer
  credenciales de la pasarela de pago en el frontend, permisos mínimos en
  cualquier integración) — pero ese archivo vive en la carpeta del bot y no
  debe leerse directamente desde aquí; si necesitas su contenido exacto,
  pide al usuario que lo pegue o lo resuma.
