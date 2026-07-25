import Image from "next/image";
import Link from "next/link";
import { ENVIO, MARCA } from "@/lib/negocio";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:px-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/marca/logo.png"
              alt={MARCA.nombre}
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="font-serif text-xl italic text-ink">
              {MARCA.nombre}
            </p>
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-2">
            Pan de masa madre, hecho con tiempo. Despacho solo en{" "}
            {ENVIO.region}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/catalogo" className="text-ink hover:text-terracotta">
            Nuestro pan
          </Link>
          <Link href="/blog" className="text-ink hover:text-terracotta">
            Blog
          </Link>
          <Link
            href="/preguntas-frecuentes"
            className="text-ink hover:text-terracotta"
          >
            Preguntas frecuentes
          </Link>
          <a
            href={MARCA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-terracotta"
          >
            Instagram {MARCA.instagramHandle}
          </a>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {MARCA.nombre}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
