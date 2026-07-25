import type { Metadata } from "next";
import { FAQ } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const TITULO = "Preguntas frecuentes";
const DESCRIPCION =
  "Gluten, aptitud para diabéticos, zonas de despacho, costo de envío y cómo conservar el pan de masa madre Mami Pan.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: `${SITE_URL}/preguntas-frecuentes` },
};

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <JsonLd data={faqSchema} />
      <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
        {TITULO}
      </h1>
      <p className="mt-4 text-base text-muted-2">{DESCRIPCION}</p>

      <dl className="mt-12 space-y-10">
        {FAQ.map((item) => (
          <div key={item.pregunta}>
            <dt className="font-serif text-xl italic text-ink">
              {item.pregunta}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-muted-2">
              {item.respuesta}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
