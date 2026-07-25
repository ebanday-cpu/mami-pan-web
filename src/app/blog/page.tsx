import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Historias sobre masa madre, fermentación y pan artesanal.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-2">
        Masa madre, fermentación y todo lo que pasa antes de que el pan
        llegue a tu mesa.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {new Date(post.date).toLocaleDateString("es-CL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="font-serif text-lg italic text-ink">
                {post.title}
              </h2>
              <p className="text-sm text-muted-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
