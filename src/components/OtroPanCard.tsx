import Image from "next/image";
import Link from "next/link";
import { formatearPrecio, whatsappUrlProducto, type Producto } from "@/lib/negocio";

export default function OtroPanCard({ producto }: { producto: Producto }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-cream p-4">
      <Link
        href={`/catalogo/${producto.slug}`}
        className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-xl"
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <Link href={`/catalogo/${producto.slug}`}>
          <h3 className="font-serif text-lg italic text-ink hover:text-terracotta">
            {producto.nombre}
          </h3>
        </Link>
        <p className="text-sm font-semibold text-terracotta">
          {formatearPrecio(producto.precio)}
        </p>

        <a
          href={whatsappUrlProducto(producto)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block w-fit rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
