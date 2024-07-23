globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_DF50JbGT.mjs';
import { f as formatBlogPosts, s as slugify } from '../chunks/utils_BneGKSZi.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dk0sMQ02.mjs';
import { $ as $$Posts } from '../chunks/Posts_DDPbgWjV.mjs';
import { $ as $$SocialNetwork, a as $$Icon } from '../chunks/SocialNetwork_CJOERN9G.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$AllTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AllTags;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/post/comandos-mas-usados-en-git.mdx": () => import('../chunks/comandos-mas-usados-en-git_BfwiDQg5.mjs').then(n => n._),"../pages/post/como-obtener-tu-primer-empleo-como-web-developer.mdx": () => import('../chunks/como-obtener-tu-primer-empleo-como-web-developer_R4zaVPE_.mjs').then(n => n._),"../pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional.mdx": () => import('../chunks/como-utilizar-git-y-github-en-un-ambiente-profesional_C0feYT6I.mjs').then(n => n._),"../pages/post/el-origen-de-javascript.mdx": () => import('../chunks/el-origen-de-javascript_CztOe57r.mjs').then(n => n._),"../pages/post/guia-para-ser-un-desarrollador-web.mdx": () => import('../chunks/guia-para-ser-un-desarrollador-web_Dv6Lv2rX.mjs').then(n => n._),"../pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx": () => import('../chunks/que-es-devin-el-primer-ingeniero-de-software-de-ia_Putjw92k.mjs').then(n => n._),"../pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx": () => import('../chunks/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo_D8R8ZU5r.mjs').then(n => n._)}), () => "../pages/post/*.mdx");
  const formattedPosts = formatBlogPosts(allPosts);
  const allTags = formattedPosts.map((cat) => cat.frontmatter.tags.toUpperCase()).flat();
  const processedCats = allTags.reduce((acc, tags) => {
    const value = acc[tags] || 0;
    return {
      ...acc,
      [tags]: value + 1
    };
  }, {});
  const { showCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="col-span-4 md:col-span-1"> <section class="bg-[#212121] rounded p-4 md:sticky md:top-4"> <h2 class="text-3xl font-bold font-[Antonio] text-[#f5efe7] mb-4">
Categorias
</h2> <ul class="flex flex-wrap gap-2 text-[#f5efe7]"> ${Object.entries(processedCats).map(([key, val]) => renderTemplate`<li class="rounded border-[#f79533] border border-dashed md:hover:bg-[#f79533] md:hover:border-[#f79533] duration-150 font-medium"> <a class="text-sm rounded pl-2 inline-flex items-center"${addAttribute(`/tags/${slugify(key)}/`, "href")}> ${key}${" "} <span class="ml-2 bg-[#f79533] py-1 px-2 rounded-e "> ${showCount && `${val}`} </span> </a> </li>`)} </ul> </section> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/AllTags.astro", void 0);

const $$Perfil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="col-span-4 md:col-span-1"> <section class="bg-[#212121] rounded p-4 text-[#f5efe7]"> <h2 class="text-3xl font-bold font-[Antonio] mb-4">Un poco sobre mi</h2> <section class="relative"> <img src="/AVATAR-GILBERTO.jpg" alt="Gilberto La Rosa" class="float-left w-24 h-auto mr-4 rounded"> <p class="text-sm"> <span class="font-semibold text-base tracking-wider">Hola</span> soy <span class="font-semibold text-base tracking-wider">Gilberto La Rosa</span>, un joven <span class="font-semibold text-base tracking-wider">Venezolano</span> más esparcido por el mundo, actualmente <span class="font-semibold text-base tracking-wider">viviendo</span> en <span class="font-semibold text-base tracking-wider">Santiago de Chile</span>, padre de familia, esposo, <span class="font-semibold text-base tracking-wider">Ingeniero de Sistemas</span> de profesión y <span class="font-semibold text-base tracking-wider">programador web</span> de oficio, aunque en el desarrollo de mi carrera me ha tocado trabajar
        en distintas áreas de sector TI.
</p> </section> <section class="my-8"> <h2 class="text-3xl font-bold font-[Antonio] mb-4">Contacto</h2> ${renderComponent($$result, "SocialNetwork", $$SocialNetwork, {})} </section> <section class="my-4"> <h2 class="text-3xl font-bold font-[Antonio] mb-4">Portafolio</h2> <a href="https://codafter.cl/" target="_blank" title="Sitio de Codafter" class="hover:text-[#f79533] hover:underline duration-150 flex flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "name": "travel-explore", "size": 30 })}
www.codafter.cl</a> </section> </section> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Perfil.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./post/comandos-mas-usados-en-git.mdx": () => import('../chunks/comandos-mas-usados-en-git_BfwiDQg5.mjs').then(n => n._),"./post/como-obtener-tu-primer-empleo-como-web-developer.mdx": () => import('../chunks/como-obtener-tu-primer-empleo-como-web-developer_R4zaVPE_.mjs').then(n => n._),"./post/como-utilizar-git-y-github-en-un-ambiente-profesional.mdx": () => import('../chunks/como-utilizar-git-y-github-en-un-ambiente-profesional_C0feYT6I.mjs').then(n => n._),"./post/el-origen-de-javascript.mdx": () => import('../chunks/el-origen-de-javascript_CztOe57r.mjs').then(n => n._),"./post/guia-para-ser-un-desarrollador-web.mdx": () => import('../chunks/guia-para-ser-un-desarrollador-web_Dv6Lv2rX.mjs').then(n => n._),"./post/que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx": () => import('../chunks/que-es-devin-el-primer-ingeniero-de-software-de-ia_Putjw92k.mjs').then(n => n._),"./post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx": () => import('../chunks/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo_D8R8ZU5r.mjs').then(n => n._)}), () => "./post/*.mdx");
  const formattedPosts = formatBlogPosts(allPosts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gilberto La Rosa \u{1F680} Web Developer \u{1F30E} Blog \u{1F4DD} Programaci\xF3n Web \u{1F4BB} GilbertoXdev \u{1F4A3}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[97%] mx-auto my-4"> <section class="flex flex-wrap items-end mb-16"> <h1 class="text-6xl m-0 md:text-9xl uppercase font-bold font-[Antonio] flex-1 items-baseline pb-1">
Un blog con gilberto
</h1> <div class="flex-1"> <p class="text-lg md:text-xl font-light">
Este mi simple y cautivador blog, donde estaré publicando tips,
          anécdotas de todo lo que he vivido como programador web y como una
          persona humana <span class="font-bold">(Existen muchas personas, que no son humanas)</span>.
</p> </div> </section> <!-- divide whit fecha --> <span class="flex items-center mb-16"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-2 flex flex-col items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "logo", "size": 90, "class": "text-[#212121]" })} <span class="font-bold block">GilbertoXdev</span> </span> <span class="h-px flex-1 bg-[#212121]"></span> </span> <section class="grid grid-cols-4 gap-4 my-8"> ${renderComponent($$result2, "Perfil", $$Perfil, {})} <section class="col-span-4 md:col-span-2"> <ul class="flex flex-col gap-4"> ${formattedPosts.map((post) => renderTemplate`${renderComponent($$result2, "Posts", $$Posts, { "frontmatter": post.frontmatter, "url": post.url })}`)} </ul> </section> ${renderComponent($$result2, "AllTags", $$AllTags, { "showCount": "true" })} </section> </section> ` })}`;
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
