globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                               */
import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, d as addAttribute } from '../astro_DMCz-Pb0.mjs';
import { $ as $$Layout } from './404_lRoTYsDu.mjs';
import { $ as $$Icon } from './index_DEUJEakp.mjs';
/* empty css                                          */

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { name, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="border-[#f79533] border-t-8 md:border-l-8 md:border-t-0 rounded-xl items-center grid grid-cols-4" data-astro-cid-dohjnao5> <div class="flex justify-center col-span-1 md:col-span-1" data-astro-cid-dohjnao5> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "size": 70, "data-astro-cid-dohjnao5": true })} </div> <div class="col-span-3 md:col-span-2 py-4 md:py-0" data-astro-cid-dohjnao5> <p class="font-bold uppercase text-xl text-left tracking-wide" data-astro-cid-dohjnao5>${name}</p> </div> <a${addAttribute(href, "href")} title="Repositorios de GitHub" target="_blank" class="text-white uppercase col-span-4 md:col-span-1 text-center" data-astro-cid-dohjnao5> <div class="bg-[#212121] p-2 md:p-4 md:px-0 rounded-b-xl md:rounded-r-xl md:rounded-b-none hover:bg-[#f79533] duration-300" data-astro-cid-dohjnao5> <span class="tracking-widest md:rotate-180 md:[writing-mode:_vertical-lr]" data-astro-cid-dohjnao5>repositorio</span> </div> </a> </li> `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Card.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$ProyectosOpenSource = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProyectosOpenSource;
  const Repos = [
    {
      urlRepo: "https://github.com/Dev-Gilberto/botones-basicos-tailwind",
      nameRepo: "botones basicos en html usando tailwind"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pryectos Open Source \u{1F4DA} Gilberto La Rosa \u{1F680} Web Developer \u{1F30E}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto my-8"> <section> <h1 class="text-6xl md:text-9xl font-bold capitalize">
proyectos <br> open source
</h1> <p class="mb-4 font-light text-lg">
Los proyectos web de código abierto, o proyectos web de código abierto,
        se han hecho cada vez más populares entre la comunidad en línea. La
        belleza de estos proyectos radica en la naturaleza colaborativa de la
        comunidad, en la que individuos con diferentes habilidades se reúnen
        para aportar su experiencia en codificación y diseño.
</p> </section> <section class="my-8"> <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-4"> ${Repos.map((repo) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": repo.urlRepo, "name": repo.nameRepo })}`)} </ul> </section> <section> <p class="text-center font-light mb-4">
Siéntete con toda la libertad de usar mis repositorios como desees, soy
        un entusiasta de la comunidad y la programación, me encanta apoyar a
        otros que están iniciando en este mundo tan maravilloso, y si esta a tu
        disposición, me puedes apoyar con un café, que te lo agradeceria de todo
        corazón 👏.
</p> <a href="https://www.buymeacoffee.com/devgilberto" target="_blank" title="Regalame un cafe" class="flex justify-center"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=devgilberto&button_colour=FFDD00&font_colour=000000&font_family=Comic&outline_colour=000000&coffee_colour=ffffff" alt="Regalame un cafe"></a> </section> </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/proyectos-open-source.astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/proyectos-open-source.astro";
const $$url = "/proyectos-open-source";

export { $$ProyectosOpenSource as default, $$file as file, $$url as url };
