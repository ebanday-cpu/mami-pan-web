# 02 — Arquitectura web

## Stack sugerido
- **Next.js** (React) — rápido, buen SEO (importante para un blog y para que
  te encuentren en Google), fácil de hacer lucir premium con buen diseño.
- Hosting: **Vercel** es lo más simple para un sitio Next.js (deploy directo
  desde git, gratis para empezar) — alternativa: mismo VPS donde vive el bot,
  si prefieres tener todo en un solo lugar. Pendiente decidir.
- Pasarela de pago: ver `04-pasarela-pago-pendiente.md`.

## Cómo se conecta con el CRM del bot (sin duplicar datos)
```
Sitio web (Next.js) ──► API interna del bot (mami-pan-bot) ──► Postgres (CRM)
                                                                     ▲
WhatsApp (cliente) ──► Bot Pancracio ───────────────────────────────┘
```
- El sitio **nunca** habla directo con Postgres.
- Se agrega al backend del bot (`mami-pan-bot/src/`) un pequeño set de
  endpoints internos, por ejemplo:
  - `POST /api/pedidos` — crear un pedido nuevo (usado por el sitio al
    completar un checkout pagado).
  - `GET /api/comunas-cobertura` — lista de comunas con despacho (una sola
    fuente para el bot y el sitio).
  - `GET /api/cliente?telefono=...` — para pre-llenar datos si el cliente ya
    existe (opcional, evaluar si el sitio va a pedir el teléfono).
- Estos endpoints deben estar protegidos (API key interna, no públicos sin
  autenticación) — ver `mami-pan-bot/docs/11-seguridad.md`.
- Un pedido hecho en el sitio debe aparecer en la misma planilla semanal de
  Google Sheets que usa el bot (`mami-pan-bot/docs/05-google-sheets.md`) —
  se escribe desde el mismo backend del bot, no desde el sitio.

## Pago: diferencia clave con el bot
El bot verifica pago por comprobante manual (transferencia). El sitio, en
cambio, debe usar una **pasarela de pago real** que confirme el pago al
instante (tarjeta, etc.) — no se le pide "envía tu comprobante" a un cliente
del sitio. Cuando el pago se confirma en la pasarela, recién ahí se crea el
pedido en el backend (nunca antes, para no agendar pedidos no pagados).

## Orden de construcción
1. Backend: agregar los endpoints internos al bot (`mami-pan-bot/`).
2. Frontend: Home + catálogo (sin checkout aún, para validar diseño primero).
3. Checkout + integración de la pasarela de pago (una vez esté elegida y
   registrada).
4. Blog.
5. Pulido final de diseño y performance (velocidad de carga, SEO).
