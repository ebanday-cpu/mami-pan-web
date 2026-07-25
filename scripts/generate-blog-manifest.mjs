import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const MANIFEST_FILE = path.join(process.cwd(), "src/content/blog-manifest.json");
const MODULES_FILE = path.join(process.cwd(), "src/content/blog-posts.generated.ts");

const archivos = fs
  .readdirSync(BLOG_DIR)
  .filter((archivo) => archivo.endsWith(".mdx"));

const posts = archivos.map((archivo) => {
  const slug = archivo.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, archivo), "utf8");
  const { data } = matter(raw);
  return { ...data, slug };
});

posts.sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(MANIFEST_FILE, JSON.stringify(posts, null, 2) + "\n");

const moduleEntries = archivos
  .map((archivo) => {
    const slug = archivo.replace(/\.mdx$/, "");
    return `  "${slug}": () => import("./blog/${archivo}"),`;
  })
  .join("\n");

const modulesSource = `// AUTO-GENERADO por scripts/generate-blog-manifest.mjs — no editar a mano.
import type { ComponentType } from "react";

export const postModules: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
${moduleEntries}
};
`;

fs.writeFileSync(MODULES_FILE, modulesSource);

console.log(`Generado ${MANIFEST_FILE} y ${MODULES_FILE} con ${posts.length} posts.`);
