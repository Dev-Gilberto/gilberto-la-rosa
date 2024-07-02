globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                               */
import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderComponent } from '../astro_utylptCb.mjs';
import { $ as $$Layout } from './404_CYNjVRzL.mjs';
/* empty css                                        */

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$CardFreelance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFreelance;
  const { name, src, alt, tecnology, text, href, state } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="rounded-xl w-full md:w-[19rem] h-auto list-none bg-[#212121] text-[#f5efe7] border-r-8 border-[#f5efe7] hover:border-[#f79533] hover:-translate-y-2 duration-300" data-astro-cid-yalqx4av> <div class="w-full h-auto p-4 -mt-10" data-astro-cid-yalqx4av> <img class="rounded-xl"${addAttribute(src, "src")}${addAttribute(alt, "alt")} data-astro-cid-yalqx4av> </div> <div class="text-center bg-[#f5efe7] text-[#212121]" data-astro-cid-yalqx4av> <h2 class="font-medium text-left pt-2 pl-4 uppercase" data-astro-cid-yalqx4av>
tecnologías aplicadas:
</h2> <ul data-astro-cid-yalqx4av> <li class="m-0 p-2 text-xs font-normal tracking-wide uppercase" data-astro-cid-yalqx4av> ${tecnology} </li> </ul> <div class="" data-astro-cid-yalqx4av> <h2 class="font-medium text-left pl-4 uppercase" data-astro-cid-yalqx4av>
Empresa u Organización:
</h2> <p class="text-xl uppercase font-bold tracking-wider" data-astro-cid-yalqx4av> ${name} </p> </div> <p class="w-full p-2 font-light tracking-wide text-left text-sm" data-astro-cid-yalqx4av> ${text} </p> </div> <a${addAttribute(href, "href")} target="_blank" title="Sitio web de la empresa u organizacion" class="tracking-wider uppercase py-4 block text-center rounded-b-xl hover:text-[#f79533] duration-300" data-astro-cid-yalqx4av> ${state} &#11016;</a> </li> `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/CardFreelance.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$ProyectosFreelance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProyectosFreelance;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos Freelance \u{1F4BB} Gilberto La Rosa \u{1F680} Web Developer \u{1F30E}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto my-8"> <section> <h1 class="text-6xl md:text-9xl font-bold capitalize">
proyectos <br> freelance
</h1> <p class="mb-4 font-light text-lg">
Como profesional freelance especializado en proyectos web, mi principal
        objetivo es satisfacer las necesidades de mis clientes al crear sitios
        web de alta calidad. Trabajar como freelance me brinda la flexibilidad
        de adaptarme a las demandas y preferencias de cada cliente, lo que me
        permite ofrecer un servicio personalizado y a medida.
</p> </section> <!-- proyectos webs --> <section class="my-8"> <ul class="flex flex-col flex-wrap justify-between md:flex-row gap-y-10"> ${renderComponent($$result2, "CardFreelance", $$CardFreelance, { "name": "codafter, spa", "src": "/codafter-cl.png", "alt": "codafter", "tecnology": "astro - html - css - javascript - tailwind", "text": "Startup para el dise\xF1o y desarrollo de sitios y plataformas webs de alto rendimiento.", "href": "https://codafter.cl/", "state": "en linea" })} </ul> </section> <section> <p class="font-light text-lg">
Estos son algunos de los proyectos a los cuales tengo el consentimiento
        o permiso por parte del cliente, para hacerlos públicos en el sitio web
        de Gilberto La Rosa, lo que quiere decir que existen otros proyectos en
        los cuales he participado o desarrollado, de los cuales se creó un
        acuerdo de confidencialidad en su momento, lo que impide su publicación
        en este sitio web.
</p> </section> </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/proyectos-freelance.astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/proyectos-freelance.astro";
const $$url = "/proyectos-freelance";

export { $$ProyectosFreelance as default, $$file as file, $$url as url };
