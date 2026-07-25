import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
};

const withMDX = createMDX({
  options: {
    // Turbopack necesita los plugins como specifiers de módulo (string),
    // no como funciones importadas directamente — no son serializables
    // entre el proceso principal y los workers del loader.
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);
