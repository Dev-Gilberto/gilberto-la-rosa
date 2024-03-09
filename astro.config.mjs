import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "static", // o 'hybrid'
  // build: {
  //   client: "./client",
  // },
  //Opciones del Servidor
  server: {
    port: 7000,
    host: true,
  },
  //La URL final donde se desplegará
  site: "https://gilberto-la-rosa.dev/",
  // integraciones
  integrations: [tailwind(), mdx(), partytown(), vue()],
});
