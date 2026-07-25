# 04 — Pasarela de pago (decisión pendiente)

No se puede construir el checkout real sin elegir y registrar una pasarela
de pago primero — igual que con Meta/WhatsApp, esto requiere un trámite de
registro como comercio que toma tiempo, no es instantáneo.

## Opciones más comunes en Chile

| Opción | Qué es | Pros | Contras |
|---|---|---|---|
| **Transbank (Webpay Plus)** | La pasarela más usada/reconocida en Chile (detrás de la mayoría de las tarjetas) | Máxima confianza para el cliente, tarjetas débito/crédito chilenas | Proceso de afiliación como comercio más largo, requiere cumplir requisitos |
| **Flow** | Fintech chilena, agrega Webpay y otros medios en una integración más simple | Registro más rápido, buena documentación para desarrolladores | Cobra comisión por transacción (variable) |
| **MercadoPago (Checkout Pro)** | Plataforma regional | Registro rápido, conocida por el público | Puede sentirse menos "local/premium" que Transbank directo |

## Recomendación general (no vinculante — es tu decisión de negocio)
Para partir rápido, **Flow** suele ser el camino más simple porque el
registro es más ágil y ya integra Webpay por debajo. Si más adelante el
volumen de ventas lo justifica, se puede evaluar pasar a una afiliación
directa con Transbank.

## Qué se necesita antes de construir el checkout
- [ ] Decidir la pasarela.
- [ ] Completar el registro como comercio (requiere datos de la empresa —
      mismo RUT/giro que ya está formalizado ante el SII).
- [ ] Obtener las credenciales de API (llave pública/privada) — se guardan
      como secreto, nunca en el código del frontend (ver
      `mami-pan-bot/docs/11-seguridad.md`).
- [ ] Definir si se acepta solo tarjeta, o también otros medios (transferencia
      vía la misma pasarela, etc.).

Mientras esto no esté listo, se puede avanzar en Home, catálogo y blog sin
checkout funcional (fase 2 del orden de construcción en
`02-arquitectura-web.md`).
