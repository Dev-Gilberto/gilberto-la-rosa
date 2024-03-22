import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // o 'hybrid'
  // build: {
  //   client: "./client",
  // },
  //Opciones del Servidor
  server: {
    port: 7000,
    host: true
  },
  //La URL final donde se desplegará
  site: "https://gilbertolarosa.dev/",
  // integraciones
  integrations: [tailwind(), mdx(), sitemap({
    filter: page => page !== "https://gilbertolarosa.dev/proyectos-open-source/" && page !== "https://gilbertolarosa.dev/trabajos-dependientes/" && page !== "https://gilbertolarosa.dev/proyectos-freelance/" && page !== "https://gilbertolarosa.dev/blog/"
  }), icon({
    iconDir: "src/assets/icons"
  }), partytown()]
});