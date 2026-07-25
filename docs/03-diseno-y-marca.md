# 03 — Diseño y marca

## Referencia de nivel
Panaderías artesanales de masa madre reconocidas por su estética (ej. estudio
visual de marcas como Tartine Bakery, Poilâne, panaderías de autor con
identidad fuerte): fotografía de producto en primer plano con buena luz
natural, tipografía con carácter (serif editorial para títulos, sans limpia
para texto), paleta de colores cálida y terrosa (tonos pan, crema, madera),
mucho espacio en blanco, nada de plantilla genérica de e-commerce.

## Principios
- La fotografía del pan es la protagonista — no saturar la página con
  elementos decorativos que compitan con las fotos.
- Contar la historia de la masa madre (proceso artesanal, tiempo de
  fermentación, beneficios) como parte del home, no solo mostrar precio.
- Consistencia con el tono cálido/cercano que ya tiene la marca en WhatsApp
  (Paula/Pancracio) — el sitio no debe sentirse corporativo o distante.
- Mobile-first: la mayoría va a entrar desde el celular (especialmente si
  llega desde Instagram o WhatsApp).

## Assets ya disponibles
- Fotos de los 3 productos, ya mejoradas con IA y en uso en el sitio:
  `public/productos/pan-blanco.jpg`, `pan-integral.jpg`, `pan-semillas.jpg`.
  Las fotos reales originales (sin editar) están respaldadas en
  `referencias diseño/pruebas-fotos-ia/00-original-*.jpg`.
- Logo: `public/marca/logo.png` (círculo, fondo transparente), integrado en
  Header, Footer, favicon y apple-touch-icon.
- Paleta y tipografía ya definidas e implementadas: crema/terracota
  (`src/app/globals.css`), Instrument Serif + Manrope
  (`src/app/layout.tsx`).
- Instagram de la marca: https://www.instagram.com/mamipan_cl (fuente
  potencial de más fotografía y contenido para el blog).

## Pendiente
- Foto propia para los otros 2 posts del blog (hoy reutilizan las fotos de
  producto como placeholder) — ver "Cómo conservar tu pan" en
  `CLAUDE.md` como ejemplo del patrón ya usado (foto generada con
  Higgsfield a partir de una foto real como referencia de fidelidad).
