import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ENVIO, PRODUCTOS } from "@/lib/negocio";
import { getAllPosts } from "@/lib/blog";
import { FAQ } from "@/lib/faq";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const faqDestacadas = FAQ.slice(0, 4);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDestacadas.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 sm:py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <h1 className="font-serif text-5xl italic leading-[1.05] text-ink sm:text-6xl">
            Hecho con tiempo
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-2">
            Pan de masa madre, fermentado lentamente y horneado sin atajos.
            Sin levadura comercial, sin conservantes — solo harina, agua,
            sal y paciencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catalogo"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Ver nuestro pan
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src="/productos/pan-blanco.jpg"
            alt="Pan de masa madre recién horneado"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* HISTORIA */}
      <section className="border-y border-line bg-cream-2">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
          <h2 className="font-serif text-3xl italic text-ink sm:text-4xl">
            Tiempo, no atajos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-2">
            Cada hogaza pasa por una fermentación lenta de casi 48 horas.
            Alimentamos nuestro propio cultivo de masa madre todos los días
            y dejamos que el tiempo haga el trabajo que ningún aditivo
            puede reemplazar: una miga más fácil de digerir, una corteza
            crocante, y un sabor que no se consigue apurando el proceso.
          </p>
        </div>
      </section>

      {/* VITRINA */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl italic text-ink sm:text-4xl">
            Nuestro pan
          </h2>
          <Link
            href="/catalogo"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            Ver todo →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {PRODUCTOS.map((producto) => (
            <ProductCard key={producto.slug} producto={producto} />
          ))}
        </div>
      </section>

      {/* DESPACHO */}
      <section className="border-y border-line bg-cream-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <h2 className="font-serif text-2xl italic text-ink">
              ¿A dónde te llevamos el pan?
            </h2>
            <p className="mt-2 text-sm text-muted-2">
              Despachamos solo en {ENVIO.region}, de {ENVIO.dias.toLowerCase()}
              , entre {ENVIO.ventana}.
            </p>
          </div>
          <div className="text-sm font-semibold text-sage">
            Envío gratis desde {ENVIO.gratisDesdeUnidades} panes
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl italic text-ink sm:text-4xl">
            Del blog
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            Ver todo →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={post.imagen}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-serif text-lg italic text-ink">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl italic text-ink sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <Link
            href="/preguntas-frecuentes"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            Ver todas →
          </Link>
        </div>
        <dl className="mt-10 space-y-8">
          {faqDestacadas.map((item) => (
            <div key={item.pregunta}>
              <dt className="font-serif text-lg italic text-ink">
                {item.pregunta}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-2">
                {item.respuesta}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CIERRE */}
      <section className="bg-brown">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
          <h2 className="font-serif text-3xl italic text-cream sm:text-4xl">
            ¿Listo para tu próximo pan?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/catalogo"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Ver nuestro pan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
