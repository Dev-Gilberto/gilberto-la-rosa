globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_EQjFAZZG.mjs';
import { $ as $$Layout } from '../chunks/Layout_B3JNV4kA.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404  Gilberto La Rosa \u{1F680} Web Developer \u{1F30E}", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] h-screen mx-auto mt-8" data-astro-cid-zetdm5md> <section class="flex flex-col justify-center items-center" data-astro-cid-zetdm5md> <h1 class="text-6xl md:text-8xl font-bold text-wrap" data-astro-cid-zetdm5md>
UFF página no encontrada,
<span class="uppercase" data-astro-cid-zetdm5md>error:</span> </h1> </section> <section class="relative" data-astro-cid-zetdm5md> <img src="/404.svg" class="img-404-animate" alt="Error 404" data-astro-cid-zetdm5md> </section> </section> ` })} `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/404.astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
