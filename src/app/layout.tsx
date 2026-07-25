import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { ENVIO, MARCA, COMUNAS_COBERTURA } from "@/lib/negocio";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const TITULO = "Mami Pan — Pan de masa madre artesanal";
const DESCRIPCION =
  "Pan de masa madre hecho con tiempo, sin atajos. Pan blanco, integral y con semillas, despacho en la Región Metropolitana.";
const IMAGEN_SOCIAL = "/productos/pan-blanco.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITULO,
    template: "%s — Mami Pan",
  },
  description: DESCRIPCION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    siteName: "Mami Pan",
    locale: "es_CL",
    type: "website",
    images: [{ url: IMAGEN_SOCIAL, width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN_SOCIAL],
  },
};

const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: MARCA.nombre,
  url: SITE_URL,
  logo: `${SITE_URL}/marca/logo.png`,
  image: `${SITE_URL}${IMAGEN_SOCIAL}`,
  description: DESCRIPCION,
  priceRange: "$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: ENVIO.region,
    containsPlace: COMUNAS_COBERTURA.map((comuna) => ({
      "@type": "AdministrativeArea",
      name: comuna,
    })),
  },
  sameAs: [MARCA.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <JsonLd data={bakerySchema} />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
