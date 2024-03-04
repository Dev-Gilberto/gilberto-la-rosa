import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  //Opciones del Servidor
  server: {
    port: 7000,
    host: true
  },
  //La URL final donde se desplegará
  site: "https://gilberto-la-rosa.dev/",
  integrations: [tailwind(), mdx(), partytown()]
});