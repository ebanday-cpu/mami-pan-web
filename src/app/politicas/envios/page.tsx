import type { Metadata } from "next";
import { COMUNAS_COBERTURA, ENVIO, formatearPrecio } from "@/lib/negocio";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const TITULO = "Política de envíos";
const DESCRIPCION = `Despacho en ${ENVIO.region}, costo ${formatearPrecio(ENVIO.costoBase)} y gratis desde ${ENVIO.gratisDesdeUnidades} panes, ${ENVIO.dias.toLowerCase()} en la ventana de ${ENVIO.ventana}.`;

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: `${SITE_URL}/politicas/envios` },
};

export default function EnviosPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Políticas", item: `${SITE_URL}/politicas` },
      { "@type": "ListItem", position: 3, name: TITULO, item: `${SITE_URL}/politicas/envios` },
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
        <h2>Cobertura</h2>
        <p>
          Despachamos solo en la {ENVIO.region}, en las siguientes{" "}
          {COMUNAS_COBERTURA.length} comunas:
        </p>
        <p>{COMUNAS_COBERTURA.join(", ")}.</p>
        <p>
          No realizamos despacho fuera de la {ENVIO.region} ni a comunas
          fuera de este listado.
        </p>

        <h2>Costo y envío gratis</h2>
        <p>
          El despacho tiene un costo base de {formatearPrecio(ENVIO.costoBase)}.
          Es gratis a partir de {ENVIO.gratisDesdeUnidades} panes en el mismo
          pedido.
        </p>

        <h2>Días y horario de entrega</h2>
        <p>
          Despachamos {ENVIO.dias.toLowerCase()}, en la ventana de{" "}
          {ENVIO.ventana}. No hay despacho los fines de semana.
        </p>

        <h2>Empresa de despacho</h2>
        <p>
          El despacho lo realiza una empresa externa de reparto. Tu pedido
          se coordina directamente contigo (dirección, comuna y horario de
          recepción) al confirmar la compra.
        </p>

        <h2>Si nadie recibe el pedido</h2>
        <p>
          Si no hay quién reciba el pedido en la dirección y horario
          coordinados, contáctanos por WhatsApp para reprogramar el
          despacho.
        </p>
      </div>
    </div>
  );
}
