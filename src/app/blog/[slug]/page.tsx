import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostContent } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imagen, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const mod = await getPostContent(slug);
  if (!mod) notFound();
  const Content = mod.default;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {new Date(post.date).toLocaleDateString("es-CL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h1 className="mt-3 font-serif text-4xl italic text-ink sm:text-5xl">
        {post.title}
      </h1>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
        <Image
          src={post.imagen}
          alt={post.title}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-ink prose-p:text-muted-2 prose-li:text-muted-2">
        <Content />
      </div>
    </article>
  );
}
