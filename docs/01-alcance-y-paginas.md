# 01 — Alcance y páginas

## Páginas
1. **Home** — elegante, editorial, fotografía grande de producto, storytelling
   de la marca (masa madre, proceso artesanal). Referencia de nivel: panaderías
   artesanales finas (ej. Tartine, Poilâne, panaderías de autor) — tipografía
   cuidada, mucho espacio en blanco, fotografía como protagonista, nada
   genérico ni "plantilla de e-commerce".
2. **Tienda / Catálogo** — los 3 productos (pan blanco, integral, con
   semillas), precios desde `docs/00-datos-negocio-actual.md` (fuente única
   para este proyecto, no repetir precios a mano en el código — ver también
   `src/lib/negocio.ts`).
3. **Producto individual** — foto grande, descripción, beneficios (digestión,
   diabetes, hinchazón/acidez — mismo texto que usa el bot), selector de
   cantidad, botón agregar al carrito.
4. **Carrito y checkout** — dirección de despacho (con selector de comuna
   restringido a las cubiertas), resumen de pedido, pasarela de pago propia
   del sitio (ver `04-pasarela-pago-pendiente.md`) — **sin relación con el
   bot**, funciona como el checkout de cualquier ecommerce.
5. **Blog** — ver `05-blog.md`.

⚠️ El sitio **no tiene ningún enlace a WhatsApp** — es ecommerce real, con
carrito y checkout propios (ver `CLAUDE.md`, "El sitio NO usa WhatsApp
para nada relacionado a la compra"). No agregar botones de "Pedir/Comprar
por WhatsApp".

## Reglas de negocio (mismas que el bot, una sola fuente de verdad)
- Envío gratis desde 4 panes, $1.500 de costo base bajo eso.
- Solo Región Metropolitana, solo comunas con cobertura.
- Ventana de despacho: 16:00 a 22:00 hrs, L-V (mismo dato que el bot).
- Gluten: "Sí, este pan contiene gluten. Posee un nivel reducido, pero sí
  tiene." (mismo texto oficial que usa Paula/el bot).

> Estos datos no se deben copiar y mantener por separado en el código del
> sitio — ver `02-arquitectura-web.md` para cómo se comparten desde una sola
> fuente con el bot.

## Fuera de alcance por ahora
- Cuentas de usuario con login (se puede evaluar después, para empezar el
  checkout puede ser sin cuenta, solo con los datos de contacto).
- Ventas fuera de la Región Metropolitana.
- Ventas B2B (mismo criterio que el bot: se deriva a un humano si alguien
  escribe por el formulario de contacto mencionando que tiene un negocio).
