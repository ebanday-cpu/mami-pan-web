import manifest from "@/content/blog-manifest.json";
import { postModules } from "@/content/blog-posts.generated";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  imagen: string;
};

export type Post = PostFrontmatter & {
  slug: string;
};

export function getAllPosts(): Post[] {
  return manifest as Post[];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostContent(slug: string) {
  return postModules[slug]?.();
}
