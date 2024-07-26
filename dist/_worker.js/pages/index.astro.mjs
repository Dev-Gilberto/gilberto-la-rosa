globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_zRN-DKkT.mjs';
import { a as $$SocialNetwork, $ as $$Icon, g as getCollection } from '../chunks/_astro_content_uDVT1YI8.mjs';
import { $ as $$Layout } from '../chunks/Layout_CT_a7Ffl.mjs';
import { $ as $$Posts } from '../chunks/Posts_CW-2ImhE.mjs';
export { renderers } from '../renderers.mjs';

const $$Perfil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="col-span-4 md:col-span-1"> <section class="bg-[#212121] rounded p-4 text-[#f5efe7]"> <h2 class="text-3xl font-bold font-[Antonio] mb-4">Un poco sobre mi</h2> <section class="relative"> <img src="/AVATAR-GILBERTO.jpg" alt="Gilberto La Rosa" class="float-left w-24 h-auto mr-4 rounded"> <p class="text-sm"> <span class="font-semibold text-base tracking-wider">Hola</span> soy <span class="font-semibold text-base tracking-wider">Gilberto La Rosa</span>, un joven <span class="font-semibold text-base tracking-wider">Venezolano</span> más esparcido por el mundo, actualmente <span class="font-semibold text-base tracking-wider">viviendo</span> en <span class="font-semibold text-base tracking-wider">Santiago de Chile</span>, padre de familia, esposo, <span class="font-semibold text-base tracking-wider">Ingeniero de Sistemas</span> de profesión y <span class="font-semibold text-base tracking-wider">programador web</span> de oficio, aunque en el desarrollo de mi carrera me ha tocado trabajar
        en distintas áreas de sector TI.
</p> </section> <section class="my-8"> <h2 class="text-3xl font-bold font-[Antonio] mb-4">Contacto</h2> ${renderComponent($$result, "SocialNetwork", $$SocialNetwork, {})} </section> <section class="my-4"> <h2 class="text-3xl font-bold font-[Antonio] mb-4">Portafolio</h2> <a href="https://codafter.cl/" target="_blank" title="Sitio de Codafter" class="hover:text-[#f79533] hover:underline duration-150 flex flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "name": "travel-explore", "size": 30 })}
www.codafter.cl</a> </section> </section> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Perfil.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const postsBlog = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gilberto La Rosa \u{1F680} Web Developer \u{1F30E} Blog \u{1F4DD} Programaci\xF3n Web \u{1F4BB} GilbertoXdev \u{1F4A3}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[97%] mx-auto my-4"> <section class="flex flex-wrap items-end mb-16"> <h1 class="text-6xl m-0 md:text-9xl uppercase font-bold font-[Antonio] flex-1 items-baseline pb-1">
Un blog con gilberto
</h1> <div class="flex-1"> <p class="text-lg md:text-xl font-light">
Este mi simple y cautivador blog, donde estaré publicando tips,
          anécdotas de todo lo que he vivido como programador web y como una
          persona humana <span class="font-bold">(Existen muchas personas, que no son humanas)</span>.
</p> </div> </section> <!-- divide whit fecha --> <span class="flex items-center mb-16"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-2 flex flex-col items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "logo", "size": 90, "class": "text-[#212121]" })} <span class="font-bold block">GilbertoXdev</span> </span> <span class="h-px flex-1 bg-[#212121]"></span> </span> <section class="grid grid-cols-4 gap-4 my-8"> ${renderComponent($$result2, "Perfil", $$Perfil, {})} <section class="col-span-4 md:col-span-2"> <ul class="flex flex-col gap-4"> ${postsBlog.map((post) => renderTemplate`${renderComponent($$result2, "Posts", $$Posts, { ...post.data, "slug": post.slug })}`)} </ul> </section> <!-- <AllTags showCount="true" /> --> </section> </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/index.astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
