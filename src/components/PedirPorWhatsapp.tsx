import { whatsappUrlProducto, type Producto } from "@/lib/negocio";

export default function PedirPorWhatsapp({ producto }: { producto: Producto }) {
  return (
    <a
      href={whatsappUrlProducto(producto)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
    >
      Pedir por WhatsApp
    </a>
  );
}
