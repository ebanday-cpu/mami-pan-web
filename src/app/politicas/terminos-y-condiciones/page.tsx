import type { Metadata } from "next";
import Link from "next/link";
import { EMPRESA, ENVIO, MARCA, WHATSAPP_PAULA } from "@/lib/negocio";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const TITULO = "Términos y condiciones";
const DESCRIPCION =
  "Condiciones de uso del sitio y de compra de pan de masa madre Mami Pan.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: `${SITE_URL}/politicas/terminos-y-condiciones` },
};

export default function TerminosPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Políticas", item: `${SITE_URL}/politicas` },
      { "@type": "ListItem", position: 3, name: TITULO, item: `${SITE_URL}/politicas/terminos-y-condiciones` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <JsonLd data={breadcrumbSchema} />
      <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
        {TITULO}
      </h1>
      <p className="mt-4 text-base text-muted-2">
        Última actualización: 27 de julio de 2026.
      </p>

      <div className="prose prose-neutral mt-12 max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-ink prose-p:text-muted-2 prose-li:text-muted-2">
        <h2>1. Quiénes somos</h2>
        <p>
          Este sitio es operado por <strong>{EMPRESA.razonSocial}</strong>,
          RUT {EMPRESA.rut} (en adelante, &ldquo;{MARCA.nombre}&rdquo;),
          dedicada a la elaboración y venta de pan de masa madre artesanal,
          con despacho a domicilio exclusivamente en la {ENVIO.region},
          Chile. {MARCA.nombre} no cuenta con local ni punto de venta físico
          abierto al público.
        </p>

        <h2>2. Objeto</h2>
        <p>
          Estos términos regulan el uso del sitio y la compra de los
          productos que en él se ofrecen: pan blanco, pan integral y pan con
          semillas, todos de masa madre.
        </p>

        <h2>3. Cómo funciona la compra hoy</h2>
        <p>
          Mientras habilitamos el pago en línea, el proceso de compra se
          coordina por WhatsApp: eliges tu pan desde el sitio y una persona
          de nuestro equipo confirma contigo cantidad, dirección de despacho
          y forma de pago. Esto no cambia tus derechos como consumidor ni la
          validez de las condiciones aquí descritas.
        </p>

        <h2>4. Precios</h2>
        <p>
          Todos los precios publicados están expresados en pesos chilenos
          (CLP) e incluyen los impuestos que correspondan según la
          normativa vigente. Los precios pueden actualizarse sin previo
          aviso; el precio válido para tu compra es el confirmado al momento
          de coordinar el pedido.
        </p>

        <h2>5. Despacho</h2>
        <p>
          El despacho se realiza únicamente en la {ENVIO.region}, en el
          detalle de comunas y condiciones descritas en nuestra{" "}
          <Link href="/politicas/envios">política de envíos</Link>.
        </p>

        <h2>6. Cambios y devoluciones</h2>
        <p>
          Al ser un producto perecible horneado para el despacho, aplican
          condiciones especiales de cambio y devolución. Revisa el detalle
          en{" "}
          <Link href="/politicas/cambios-y-devoluciones">
            cambios y devoluciones
          </Link>
          .
        </p>

        <h2>7. Propiedad intelectual</h2>
        <p>
          El nombre, logo, fotografías y contenidos de este sitio
          pertenecen a {EMPRESA.razonSocial} y no pueden reproducirse ni
          utilizarse con fines comerciales sin autorización previa.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. La versión
          vigente es siempre la publicada en esta página, con su fecha de
          última actualización.
        </p>

        <h2>9. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República de Chile,
          incluyendo la Ley N.º 19.496 sobre Protección de los Derechos de
          los Consumidores. Cualquier controversia se someterá a los
          tribunales competentes de Chile.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para consultas sobre estos términos, escríbenos por WhatsApp al{" "}
          <a
            href={`https://wa.me/${WHATSAPP_PAULA}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            +56 9 5340 9802
          </a>
          .
        </p>
      </div>
    </div>
  );
}
