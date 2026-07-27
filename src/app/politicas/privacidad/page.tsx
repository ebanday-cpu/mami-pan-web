import type { Metadata } from "next";
import { EMPRESA, MARCA, WHATSAPP_PAULA } from "@/lib/negocio";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const TITULO = "Política de privacidad";
const DESCRIPCION =
  "Qué datos recopila Mami Pan, para qué los usa y cómo ejercer tus derechos de privacidad.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: `${SITE_URL}/politicas/privacidad` },
};

export default function PrivacidadPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Políticas", item: `${SITE_URL}/politicas` },
      { "@type": "ListItem", position: 3, name: TITULO, item: `${SITE_URL}/politicas/privacidad` },
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
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>{EMPRESA.razonSocial}</strong>, RUT {EMPRESA.rut}, es
          responsable de los datos personales que recibe a través de este
          sitio y de la coordinación de pedidos por WhatsApp.
        </p>

        <h2>2. Qué datos recopilamos</h2>
        <p>
          Cuando haces un pedido recopilamos los datos necesarios para
          gestionarlo y despacharlo: nombre, teléfono, dirección de
          despacho, comuna y, si lo entregas, correo electrónico. No te
          pedimos datos sensibles ni de salud más allá de lo que tú decidas
          compartir voluntariamente (por ejemplo, si mencionas una
          condición como diabetes al preguntar por nuestro pan).
        </p>

        <h2>3. Para qué usamos tus datos</h2>
        <ul>
          <li>Confirmar y coordinar tu pedido.</li>
          <li>Gestionar el despacho a tu domicilio.</li>
          <li>Contactarte por consultas relacionadas a tu compra.</li>
        </ul>
        <p>No usamos tus datos para fines de marketing sin tu consentimiento.</p>

        <h2>4. Con quién compartimos tus datos</h2>
        <p>
          Compartimos solo los datos estrictamente necesarios para la
          entrega (nombre, dirección, teléfono) con la empresa externa que
          realiza el despacho. Cuando habilitemos el pago en línea,
          compartiremos los datos de pago que corresponda directamente con
          la pasarela de pago elegida, bajo sus propias políticas de
          seguridad. No vendemos ni cedemos tus datos a terceros para fines
          distintos a la gestión de tu pedido.
        </p>

        <h2>5. Conservación</h2>
        <p>
          Conservamos tus datos mientras sea necesario para gestionar tu
          pedido y cumplir con obligaciones legales o tributarias.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Puedes solicitar acceso, rectificación, cancelación u oposición
          (derechos ARCO) sobre tus datos personales, conforme a la
          normativa chilena de protección de datos personales, escribiendo
          por WhatsApp al{" "}
          <a
            href={`https://wa.me/${WHATSAPP_PAULA}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            +56 9 5340 9802
          </a>
          .
        </p>

        <h2>7. Cookies y analítica</h2>
        <p>
          Este sitio no utiliza cookies de analítica ni de publicidad de
          terceros. Solo usamos lo técnicamente necesario para que el sitio
          funcione correctamente.
        </p>

        <h2>8. Menores de edad</h2>
        <p>
          Este sitio está dirigido a personas mayores de edad que puedan
          realizar una compra. Si eres menor de edad, realiza tu pedido con
          la ayuda de un adulto responsable.
        </p>

        <h2>9. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política en cualquier momento. La versión
          vigente es siempre la publicada en esta página.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para cualquier consulta sobre esta política, escríbenos a{" "}
          {MARCA.nombre} por WhatsApp al{" "}
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
