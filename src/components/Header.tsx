import Image from "next/image";
import Link from "next/link";
import { MARCA, WHATSAPP_URL_GENERAL } from "@/lib/negocio";
import MobileMenu from "@/components/MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Nuestro pan" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3">
          <MobileMenu links={NAV_LINKS} />
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${MARCA.nombre} — inicio`}
          >
            <Image
              src="/marca/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
            <span className="hidden font-serif text-2xl italic text-ink sm:inline">
              {MARCA.nombre}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink transition-colors hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-terracotta-dark sm:text-sm"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
