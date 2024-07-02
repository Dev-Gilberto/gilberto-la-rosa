globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, d as addAttribute, f as renderSlot } from './astro_DMCz-Pb0.mjs';
/* empty css                                              */
import { $ as $$Layout } from './pages/404_B8jOpB0h.mjs';
import { s as slugify, a as formatpubDate, b as $$ButtonBack } from './pages/_tags__g17xkJvR.mjs';
import { $ as $$Icon, a as $$SocialNetwork } from './pages/index_Cssh3Jei.mjs';

const $$Astro$2 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Frases = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Frases;
  return renderTemplate`${maybeRenderHead()}<section class="rounded-xl block p-4 font-light bg-[#6ab0e4]"> <span class="block text-xl">👍</span> <p class="text-xl font-light my-2">
“El único modo de hacer un gran trabajo es amar lo que haces. Si no lo has
    encontrado todavía, sigue buscando. No te acomodes. Como con todo lo que es
    propio del corazón, lo sabrás cuando lo encuentres.”
</p> <span class="block text-right uppercase font-bold">steve jobs</span> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Frases.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Share = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Share;
  return renderTemplate(_a || (_a = __template(["", '<button id="btn-share" class="inline-flex items-center gap-1 text-lg font-medium uppercase hover:text-[#f79533] duration-300 tracking-wide"> ', ' Compartir\n</button> <script type="text/javascript">\n  const shareButton = document.getElementById("btn-share");\n\n  shareButton.addEventListener("click", (event) => {\n    if ("share" in navigator) {\n      navigator\n        .share({\n          title: "Comparte Esta P\xE1gina, en tu platafoma favorita",\n\n          url: window.location.href,\n        })\n\n        .then(() => {\n          console.log("Contenido Compartido !");\n        })\n        .catch(console.error);\n    } else {\n      alert(\n        "Lo siento, este navegador no tiene soporte para recursos compartidos."\n      );\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "share", "class": "block duration-300 group-hover:me-0.5 rtl:rotate-180" }));
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Share.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$SinglePostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SinglePostLayout;
  const { frontmatter } = Astro2.props;
  const { title, emojis, pubDate, author, tags } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto my-8 md:w-3/5"> <article> <div class="text-3xl md:text-7xl font-bold uppercase mb-4"> <h1 class="inline"> ${title} </h1>${emojis} </div> <!-- category --> <section> <small class="flex justify-center mb-4"> <a class="uppercase font-medium py-1 px-4 rounded-xl border-b-2 border-[#f79533] tracking-wider"${addAttribute(`/tags/${slugify(tags)}`, "href")}>${tags}</a> </small> </section> <!-- Autor --> <section> <p class="text-center text-lg">
Escrito por: <span class="font-semibold">${author}</span> </p> ${renderComponent($$result2, "SocialNetwork", $$SocialNetwork, {})} </section> <!-- divide whit fecha --> <span class="flex items-center my-4"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-6 text-lg font-bold">${formatpubDate(pubDate)}</span> <span class="h-px flex-1 bg-[#212121]"></span> </span> <!-- content --> ${renderSlot($$result2, $$slots["default"])} </article> <!-- divide whit rrss --> <span class="flex items-center my-8"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-6">${renderComponent($$result2, "SocialNetwork", $$SocialNetwork, {})}</span> <span class="h-px flex-1 bg-[#212121]"></span> </span> ${renderComponent($$result2, "Frases", $$Frases, {})} </section> <section class="flex justify-between w-[90%] md:w-[60%] mx-auto my-8"> ${renderComponent($$result2, "Share", $$Share, {})} ${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})} </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/SinglePostLayout.astro", void 0);

export { $$SinglePostLayout as default };
