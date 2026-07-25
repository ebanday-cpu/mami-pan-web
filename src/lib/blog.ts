import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  imagen: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

export function getAllPosts(): Post[] {
  const archivos = fs
    .readdirSync(BLOG_DIR)
    .filter((archivo) => archivo.endsWith(".mdx"));

  const posts = archivos.map((archivo) => {
    const slug = archivo.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, archivo), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as PostFrontmatter), slug, content };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
