import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import remarkToc from "remark-toc";
import partytown from "@astrojs/partytown";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  //Opciones del Servidor
  server: {
    port: 7000,
    host: true,
  },
  //La URL final donde se desplegará
  site: "https://gilberto-la-rosa.xyz/",
  // integraciones
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      remarkPlugins: [remarkToc],
      // rehypePlugins: [rehypeMinifyHtml],
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
      gfm: false,
    }),
    sitemap({
      filter: (page) =>
        page !== "https://gilbertolarosa.dev/proyectos-open-source/" &&
        page !== "https://gilbertolarosa.dev/trabajos-dependientes/" &&
        page !== "https://gilbertolarosa.dev/proyectos-freelance/" &&
        page !== "https://gilbertolarosa.dev/blog/",
    }),
    icon({
      iconDir: "src/assets/icons",
    }),
    partytown(),
  ],
});
