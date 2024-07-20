globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent, E as renderSlot, I as renderTransition, J as renderHead, K as slide } from './astro/server_EQjFAZZG.mjs';
/* empty css                                              */

const $$FooterLayout = createComponent(($$result, $$props, $$slots) => {
  const Year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<section class="w-[90%] mx-auto text-center py-4"> <p class="flex flex-wrap md:items-center justify-center gap-1">
Juan Griego, Nueva Esparta, Venezuela. <span class="uppercase font-bold inline-flex">gilbertx.dev<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></path><path stroke-linecap="round" d="M14 15.667a4.535 4.535 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></path></g></svg></span> Todos los derechos reservados
${Year}.
</p> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/FooterLayout.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$BtnTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button id="btnSubir" class="flex-none fixed bottom-5 right-5 z-50 tracking-wider cursor-pointer px-4 py-2 rounded uppercase bg-white font-bold border-b-4 border-[#f79533] active:border-transparent duration-150 font-[Antonio] hover:border-transparent">Subir <span>&#11014;</span></button> <script data-astro-rerun>\n  window.onscroll = function () {\n    scrollFunction();\n  };\n\n  function scrollFunction() {\n    if (\n      document.body.scrollTop > 20 ||\n      document.documentElement.scrollTop > 20\n    ) {\n      document.getElementById("btnSubir").style.display = "block";\n    } else {\n      document.getElementById("btnSubir").style.display = "none";\n    }\n  }\n\n  document.getElementById("btnSubir").addEventListener("click", function () {\n    document.body.scrollTop = 0; // Para Safari\n    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/BtnTop.astro", void 0);

const $$Astro$2 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  return renderTemplate`<meta charset="UTF-8"><meta name="description" content="Gilberto La Rosa 🚀 Web Developer 🌎 Blog 📝 Programación Web 💻 GilbertoXdev 💣"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical"${addAttribute(Astro2.url, "href")}><link rel="icon" type="image/svg+xml" href="/logo.svg"><link rel="apple-touch-icon" sizes="57x57" href=""><link rel="apple-touch-icon" sizes="114x114" href=""><!-- fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap" rel="stylesheet"><!-- end fonts --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/csshake/1.7.0/csshake.min.css" integrity="sha512-Kd+SEhBK155eAi26GMJymGkvztAnpEGA/PsJc9OKxRwkhJGblvtVv5Fv1R8zYvPq7dbsy+3o4QJco6hzBdxVjg==" crossorigin="anonymous" referrerpolicy="no-referrer">`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Seo.astro", void 0);

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head>', "<title>", '</title><!-- Google tag (gtag.js) --><script async type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-FQWMBV9PW7"><\/script><script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-FQWMBV9PW7");\n    <\/script>', "", "</head> <body> <main", "> ", " </main> <footer> ", " ", " </footer> </body></html>"])), renderComponent($$result, "Seo", $$Seo, {}), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute(renderTransition($$result, "qje6ewha", slide({ duration: "0.6s" })), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterLayout", $$FooterLayout, {}), renderComponent($$result, "BtnTop", $$BtnTop, {}));
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
