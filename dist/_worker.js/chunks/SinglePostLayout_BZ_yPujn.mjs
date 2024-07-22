globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, d as addAttribute, E as renderSlot } from './astro/server_EQjFAZZG.mjs';
/* empty css                                              */
import { $ as $$Layout } from './Layout_B3JNV4kA.mjs';
import { s as slugify, a as formatpubDate } from './utils_BneGKSZi.mjs';
import { a as $$Icon, $ as $$SocialNetwork } from './SocialNetwork_D2gKBP5B.mjs';
import { $ as $$ButtonBack } from './ButtonBack_De9OMSQ3.mjs';

const $$Frases = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="rounded block p-4 font-light bg-[radial-gradient(164.75%_100%_at_0%_0%,#f79533_0%,#f37055_35.73%,#ef4e7b_56%,#a166ab_88%)]"> <span class="block text-xl">👍</span> <p class="text-xl font-light my-2 italic">
“El único modo de hacer un gran trabajo es amar lo que haces. Si no lo has
    encontrado todavía, sigue buscando. No te acomodes. Como con todo lo que es
    propio del corazón, lo sabrás cuando lo encuentres.”
</p> <span class="block text-right uppercase font-bold">steve jobs</span> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Frases.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Share = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button id="btn-share" class="inline-flex items-center gap-1 text-lg font-bold uppercase hover:text-[#f79533] duration-150 tracking-wide font-[Antonio]"> ', ' Compartir\n</button> <script type="text/javascript" data-astro-rerun>\n  const shareButton = document.getElementById("btn-share");\n\n  shareButton.addEventListener("click", (event) => {\n    if ("share" in navigator) {\n      navigator\n        .share({\n          title: "Comparte Esta P\xE1gina, en tu platafoma favorita",\n\n          url: window.location.href,\n        })\n\n        .then(() => {\n          console.log("Contenido Compartido !");\n        })\n        .catch(console.error);\n    } else {\n      alert(\n        "Lo siento, este navegador no tiene soporte para recursos compartidos."\n      );\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "share", "class": "block duration-150 group-hover:me-0.5 rtl:rotate-180" }));
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Share.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$SinglePostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SinglePostLayout;
  const { frontmatter } = Astro2.props;
  const { title, emojis, pubDate, author, tags } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[97%] mx-auto my-8 md:w-3/5"> <article> <div class="text-3xl md:text-7xl font-[Antonio] font-bold uppercase mb-4"> <h1 class="inline"> ${title} </h1>${emojis} </div> <!-- category --> <section> <small class="flex flex-wrap mb-4"> <a class="uppercase font-medium py-1 px-4 rounded border-b-2 border-[#f79533] tracking-wider bg-white hover:border-transparent duration-150"${addAttribute(`/tags/${slugify(tags)}`, "href")}>${tags}</a> </small> </section> <!-- Autor --> <section> <p class="text-lg flex flex-col items-center">
Escrito por: <br> <span class="flex gap-1 items-center font-[Antonio] font-bold text-3xl"> <img src="/AVATAR-GILBERTO.jpg" alt="Gilberto La Rosa" class="w-12 rounded-full"> ${author}</span> </p> ${renderComponent($$result2, "SocialNetwork", $$SocialNetwork, {})} </section> <!-- divide whit fecha --> <span class="flex items-center my-10"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-6 text-lg font-bold">${formatpubDate(pubDate)}</span> <span class="h-px flex-1 bg-[#212121]"></span> </span> <!-- content --> ${renderSlot($$result2, $$slots["default"])} </article> <!-- divide whit rrss --> <span class="flex items-center my-10"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-6">${renderComponent($$result2, "SocialNetwork", $$SocialNetwork, {})}</span> <span class="h-px flex-1 bg-[#212121]"></span> </span> ${renderComponent($$result2, "Frases", $$Frases, {})} </section> <section class="flex justify-between w-[90%] md:w-[60%] mx-auto my-8"> ${renderComponent($$result2, "Share", $$Share, {})} ${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})} </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/SinglePostLayout.astro", void 0);

export { $$SinglePostLayout as default };
