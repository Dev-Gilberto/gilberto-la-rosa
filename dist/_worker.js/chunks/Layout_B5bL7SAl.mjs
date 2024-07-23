globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent, I as renderHead, J as renderTransition, E as renderSlot, K as slide } from './astro/server_DF50JbGT.mjs';
/* empty css                                              */

const $$FooterLayout = createComponent(($$result, $$props, $$slots) => {
  const Year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer> <section class="w-[90%] mx-auto text-center py-4"> <p class="flex flex-wrap md:items-center justify-center gap-1">
Juan Griego, Nueva Esparta, Venezuela. <span class="uppercase font-bold inline-flex">GilbertoX.dev<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></path><path stroke-linecap="round" d="M14 15.667a4.535 4.535 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></path></g></svg></span> Todos los derechos reservados
${Year}.
</p> </section> </footer>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/FooterLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BtnTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button id="btnSubir" class="flex-none fixed bottom-5 right-5 z-50 tracking-wider cursor-pointer px-4 py-2 rounded uppercase bg-white font-bold border-b-4 border-[#f79533] active:border-transparent duration-150 font-[Antonio] hover:border-transparent">Subir <span>&#11014;</span></button> <script type="text/javascript" data-astro-rerun>\n  document.addEventListener(\n    "astro:page-load",\n    () => {\n      // Esto solo se ejecuta una vez.\n      setupStuff();\n    },\n    { once: true }\n  );\n\n  window.onscroll = function () {\n    scrollFunction();\n  };\n\n  function scrollFunction() {\n    if (\n      document.body.scrollTop > 20 ||\n      document.documentElement.scrollTop > 20\n    ) {\n      document.getElementById("btnSubir").style.display = "block";\n    } else {\n      document.getElementById("btnSubir").style.display = "none";\n    }\n  }\n\n  document.getElementById("btnSubir").addEventListener("click", function () {\n    document.body.scrollTop = 0; // Para Safari\n    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/BtnTop.astro", void 0);

const $$Astro$2 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  return renderTemplate`<meta charset="UTF-8"><meta name="description" content="Gilberto La Rosa 🚀 Web Developer 🌎 Blog 📝 Programación Web 💻 GilbertoXdev 💣"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical"${addAttribute(Astro2.url, "href")}><link rel="icon" type="image/svg+xml" href="/logo.svg"><link rel="apple-touch-icon" sizes="57x57" href=""><link rel="apple-touch-icon" sizes="114x114" href=""><!-- fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap" rel="stylesheet"><!-- end fonts -->`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Seo.astro", void 0);

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "Seo", $$Seo, {})}<title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative"> <!-- <Icon
      name="cpu"
      class="absolute -top-40 -right-40 text-[#212121] opacity-5"
      size={600}
    /> --> <main${addAttribute(renderTransition($$result, "46y5bbza", slide({ duration: "0.6s" })), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "FooterLayout", $$FooterLayout, {})} ${renderComponent($$result, "BtnTop", $$BtnTop, {})} </body></html>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
