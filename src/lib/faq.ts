import { BENEFICIOS, ENVIO, TEXTO_GLUTEN, NO_APTO_CELIACOS } from "@/lib/negocio";

export type FaqItem = {
  pregunta: string;
  respuesta: string;
};

export const FAQ: FaqItem[] = [
  {
    pregunta: "¿Qué es el pan de masa madre y en qué se diferencia del pan industrial?",
    respuesta:
      "Es pan fermentado con un cultivo natural de levaduras y bacterias (masa madre), sin levadura comercial ni conservantes. Cada hogaza fermenta lentamente durante casi 48 horas, lo que da una miga más fácil de digerir, una corteza crocante y un sabor que no se consigue apurando el proceso.",
  },
  {
    pregunta: "¿El pan de Mami Pan tiene gluten?",
    respuesta: `${TEXTO_GLUTEN} ${NO_APTO_CELIACOS}`,
  },
  {
    pregunta: "¿Es apto para personas con diabetes o problemas digestivos?",
    respuesta: `${BENEFICIOS.join(" ")}`,
  },
  {
    pregunta: "¿Dónde despachan?",
    respuesta: `Despachamos solo en ${ENVIO.region} (35 comunas con cobertura), ${ENVIO.dias.toLowerCase()}, en la ventana de ${ENVIO.ventana}. No hay despacho los fines de semana ni fuera de la Región Metropolitana.`,
  },
  {
    pregunta: "¿Cuánto cuesta el envío?",
    respuesta: `El despacho cuesta ${ENVIO.costoBase.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 })}, y es gratis a partir de ${ENVIO.gratisDesdeUnidades} panes en el mismo pedido.`,
  },
  {
    pregunta: "¿Qué tipos de pan venden?",
    respuesta:
      "Tres variedades, todas de masa madre con la misma fermentación lenta: pan blanco, pan integral y pan con semillas.",
  },
  {
    pregunta: "¿Cómo se conserva el pan de masa madre?",
    respuesta:
      "Al no llevar conservantes, se guarda distinto al pan industrial: a temperatura ambiente los primeros días (corte hacia abajo, evitando el plástico), y luego se puede congelar en rebanadas para que dure toda la semana. El detalle completo está en el blog, en 'Cómo conservar tu pan toda la semana'.",
  },
];
