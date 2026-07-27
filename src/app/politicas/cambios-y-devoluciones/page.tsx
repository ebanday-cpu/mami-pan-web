import type { Metadata } from "next";
import { WHATSAPP_PAULA } from "@/lib/negocio";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const TITULO = "Cambios y devoluciones";
const DESCRIPCION =
  "Qué hacer si tu pedido de pan llega dañado, incompleto o distinto a lo solicitado.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: `${SITE_URL}/politicas/cambios-y-devoluciones` },
};

export default function CambiosYDevolucionesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Políticas", item: `${SITE_URL}/politicas` },
      { "@type": "ListItem", position: 3, name: TITULO, item: `${SITE_URL}/politicas/cambios-y-devoluciones` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <JsonLd data={breadcrumbSchema} />
      <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
        {TITULO}
      </h1>
      <p className="mt-4 text-base text-muted-2">{DESCRIPCION}</p>

      <div className="prose prose-neutral mt-12 max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-ink prose-p:text-muted-2 prose-li:text-muted-2">
        <h2>Por qué no aceptamos cambios por &ldquo;no me gustó&rdquo;</h2>
        <p>
          Nuestro pan es un producto perecible, horneado especialmente para
          cada despacho. Por esta razón, y conforme a las excepciones que
          contempla la normativa de protección al consumidor en Chile para
          productos perecibles, no aceptamos cambios ni devoluciones por
          simple arrepentimiento una vez despachado el pedido.
        </p>

        <h2>Cuándo sí resolvemos tu pedido</h2>
        <p>Sí reponemos o reembolsamos tu pedido si:</p>
        <ul>
          <li>Llega dañado o en mal estado.</li>
          <li>Llega incompleto (falta algún pan del pedido).</li>
          <li>Llega distinto al producto que solicitaste.</li>
        </ul>

        <h2>Cómo reclamar</h2>
        <p>
          Escríbenos por WhatsApp al{" "}
          <a
            href={`https://wa.me/${WHATSAPP_PAULA}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            +56 9 5340 9802
          </a>{" "}
          dentro de las 24 horas siguientes a la entrega, adjuntando una
          foto del pedido recibido. Evaluamos cada caso y coordinamos
          reposición o reembolso según corresponda.
        </p>
      </div>
    </div>
  );
}
