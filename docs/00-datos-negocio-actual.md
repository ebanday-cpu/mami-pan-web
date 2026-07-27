# 00 — Datos reales del negocio (fuente única para este proyecto)

⚠️ **Este archivo es la fuente de verdad para este sitio.** `mami-pan-web/` y
`mami-pan-bot/` son carpetas de código separadas, y este proyecto tiene
prohibido leer archivos dentro de `mami-pan-bot/` directamente (ver
regla en `CLAUDE.md` — es una decisión de seguridad, no una limitación
técnica). Por eso los datos reales del negocio se copian aquí a mano en vez
de leerlos en vivo desde `mami-pan-bot/`.

Origen de estos datos: `mami-pan-bot/docs/01-negocio.md` y
`mami-pan-bot/docs/12-comunas-cobertura.md` (que a su vez es la única fuente
de comunas para bot + web + dashboard). Si esos documentos cambian, hay que
actualizar también esta copia.

## Productos (masa madre, ~500 g c/u, gluten moderado)
| Producto | Precio |
|---|---|
| Pan blanco | $3.200 |
| Pan integral | $3.200 |
| Pan con semillas | $3.400 |

**Pan con semillas:** mezcla de chía, linaza y semillas de calabaza, por dentro y por fuera de la masa.

**Beneficios** (usar tal cual cuando se muestren en el sitio):
- Ideal para personas con problemas digestivos.
- Apto para personas con diabetes (igual sugerir consultar con su médico, no
  dar consejo médico).
- Ayuda a aliviar hinchazón y acidez.

**Texto oficial sobre el gluten (usar exacto, no parafrasear):**
> Sí, este pan contiene gluten. Posee un nivel reducido, pero sí tiene.

No es apto para celíacos.

## Envío
- Costo base: **$1.500**.
- **Gratis desde 4 panes** en adelante.
- Cobertura: Región Metropolitana — ver lista exacta de comunas más abajo.
- Ventana de entrega: **16:00 a 22:00 hrs**.
- Días de despacho: **lunes a viernes** (no hay despacho fines de semana).

## Comunas con cobertura (Región Metropolitana) — 35 comunas
Fuente única compartida entre bot, web y dashboard
(`mami-pan-bot/docs/12-comunas-cobertura.md`). Si esta lista cambia, se
actualiza ahí primero y se propaga a los 3 proyectos.

Cerrillos, Cerro Navia, Colina, Conchalí, El Bosque, Estación Central,
Huechuraba, Independencia, La Cisterna, La Florida, La Granja, La Pintana,
La Reina, Las Condes, Lo Barnechea, Lo Espejo, Lo Prado, Macul, Maipú, Ñuñoa,
Padre Hurtado, Pedro Aguirre Cerda, Peñalolén, Providencia, Pudahuel,
Puente Alto, Quilicura, Quinta Normal, Recoleta, Renca, San Bernardo,
San Joaquín, San Miguel, San Ramón, Santiago (Centro), Vitacura.

El sitio debe validar la comuna ingresada contra esta lista exacta
(normalizando tildes/mayúsculas) antes de permitir continuar con el
checkout — igual que hace el bot en su flujo de conversación.

## Marca / canales
- **Negocio:** Mami Pan.
- **Razón social:** Mami Pan SPA — **RUT:** 78.292.856-2.
- Instagram: https://www.instagram.com/mamipan_cl (@mamipan_cl).

## Identidad legal y contacto para políticas (privacidad, términos, envíos, cambios)
- **Responsable/vendedor:** Mami Pan SPA, RUT 78.292.856-2.
- **Canal de contacto para consultas de privacidad, reclamos o cambios/
  devoluciones:** WhatsApp de **Paula** (atención humana), +56 9 5340 9802
  — no el bot Pancracio.
- **Política de cambios y devoluciones (2026-07-27):** al ser un producto
  perecible horneado para el despacho, no se aceptan cambios por "no me
  gustó". Sí se resuelve (reposición o reembolso) si el pedido llega
  dañado, incompleto o distinto a lo solicitado, avisando por WhatsApp a
  Paula dentro de un plazo corto tras la entrega (mismo día/24 horas).
- El sitio no usa cookies de analítica ni de terceros por ahora (no hay
  Google Analytics ni similar instalado) — si se agrega algo en el futuro,
  actualizar este dato y la política de privacidad.

### Los dos números de WhatsApp del ecosistema
- **Paula** (humana) atiende el WhatsApp de **atención/pedidos**: +56 9
  5340 9802. Ella es quien toma los pedidos reales manualmente hoy.
- **Pancracio** (el bot): **+56 9 6550 0052**. Su rol es agendar y su
  discurso está armado para **llevar a la venta** (guion de ventas, no
  de soporte/dudas) — sus respuestas después se concilian con los
  pedidos que Paula toma manualmente.

⚠️ **Estado 2026-07-26, temporal:** mientras no haya pasarela de pago
(ver "Medios de pago" abajo), el sitio **sí** enlaza a WhatsApp — botón
"Pedir por WhatsApp" en header/ficha de producto, apuntando al número
de **Pancracio**. Es una excepción consciente y reversible (rama de git
`whatsapp-temporal`, detalle completo en `CLAUDE.md`), no la regla de
fondo: en cuanto la pasarela esté lista, el sitio vuelve a su checkout
propio (carrito + despacho, sin WhatsApp de por medio).

## Medios de pago
El bot/Paula manejan pedidos con transferencia bancaria manual y
comprobante — eso es aparte y no tiene relación con el sitio. El sitio web
va a tener su propia pasarela de pago real, igual que cualquier ecommerce
(tarjeta, confirmación instantánea) — ver `04-pasarela-pago-pendiente.md`,
todavía sin elegir. El carrito y el checkout (formulario de despacho +
resumen) ya están construidos; falta conectar el paso de pago.

## Pendientes de este archivo
- Confirmar si el listado de comunas o los precios cambian — actualizar aquí
  y avisar que también hay que actualizarlo en `mami-pan-bot/` y
  `mami-pan-dashboard/` si corresponde.
