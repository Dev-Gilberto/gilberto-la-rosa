globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                               */
import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderComponent } from '../astro_DMCz-Pb0.mjs';
import { $ as $$Layout } from './404_B8jOpB0h.mjs';
/* empty css                          */

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
function formatpubDate(pubDate) {
  return new Date(pubDate).toLocaleDateString("es", {
    timeZone: "UTC",
  });
}

function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { pubDate, draft } = post.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

const $$Astro$2 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Posts;
  const { frontmatter, url } = Astro2.props;
  const { title, emojis, pubDate, image, description } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<li class="rounded-xl bg-white p-4 sm:p-6" data-astro-cid-7nqkypoh> <article data-astro-cid-7nqkypoh> <span class="inline-block text-5xl pt-2" data-astro-cid-7nqkypoh>${image.url}</span> <a${addAttribute(url, "href")} title="Guía paso a paso para ser un desarrollador web" data-astro-cid-7nqkypoh> <h2 class="my-4 text-3xl font-bold uppercase tracking-wide hover:text-[#f79533] transition duration-300" data-astro-cid-7nqkypoh> <span class="md:hover:underline" data-astro-cid-7nqkypoh>${title}</span>${emojis} </h2> </a> <p class="mt-2 text-base font-light" data-astro-cid-7nqkypoh> ${description} </p> <div class="text-sm font-medium uppercase mt-4 items-center flex justify-between" data-astro-cid-7nqkypoh> <a${addAttribute(url, "href")} title="Guía paso a paso para ser un desarrollador web" class="group inline-flex gap-1 hover:text-[#f79533] transition duration-300" data-astro-cid-7nqkypoh>
ver mas
<span aria-hidden="true" class="block duration-300 group-hover:ms-0.5 rtl:rotate-180" data-astro-cid-7nqkypoh>
&#10145;
</span> </a> <time datetime="" class="uppercase" data-astro-cid-7nqkypoh>publicación: ${formatpubDate(pubDate)}</time> </div> </article> </li> `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Posts.astro", void 0);

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$ButtonBack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtonBack;
  return renderTemplate`${maybeRenderHead()}<a href="/blog" title="pagina Blog con Gilberto" class="inline-flex items-center gap-1 text-lg font-medium uppercase hover:text-[#f79533] duration-300 tracking-wide"> <span aria-hidden="true" class="block duration-300 group-hover:me-0.5 rtl:-rotate-180">
&#11013;
</span>
Regresar
</a>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/ButtonBack.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
async function getStaticPaths() {
  return [
    {
      params: { tags: slugify("web developer") },
      props: { name: "web developer" }
    },
    {
      params: { tags: slugify("control de versiones") },
      props: { name: "control de versiones" }
    },
    {
      params: { tags: slugify("tecnolog\xEDa") },
      props: { name: "tecnolog\xEDa" }
    },
    {
      params: { tags: slugify("Programaci\xF3n") },
      props: { name: "Programaci\xF3n" }
    }
  ];
}
const $$tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tags;
  const { tags } = Astro2.params;
  const { name } = Astro2.props;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../blog/comandos-mas-usados-en-git.mdx": () => import('./comandos-mas-usados-en-git_C_V0Qwfu.mjs').then(n => n.c),"../blog/como-obtener-tu-primer-empleo-como-web-developer.mdx": () => import('./como-obtener-tu-primer-empleo-como-web-developer_BiZfU85G.mjs'),"../blog/como-utilizar-git-y-github-en-un-ambiente-profesional.mdx": () => import('./como-utilizar-git-y-github-en-un-ambiente-profesional_BmIOv4H2.mjs'),"../blog/el-origen-de-javascript.mdx": () => import('./el-origen-de-javascript_DT8AkzqB.mjs'),"../blog/guia-para-ser-un-desarrollador-web.mdx": () => import('./guia-para-ser-un-desarrollador-web_DKIVEes8.mjs'),"../blog/que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx": () => import('./que-es-devin-el-primer-ingeniero-de-software-de-ia_CcLbou3S.mjs'),"../blog/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx": () => import('./que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo_CKCgifY4.mjs')}), () => "../blog/*.mdx");
  const formattedPosts = formatBlogPosts(allPosts);
  const catPosts = formattedPosts.filter(
    (post) => slugify(post.frontmatter.tags) === tags
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto my-8"${addAttribute(`Posts about ${name}`, "aria-label")}> <h1 class="text-6xl md:text-9xl font-bold capitalize">
artículos relacionados:
</h1> <section class="text-center mb-8"> <span class="text-2xl md:text-5xl uppercase font-medium py-4 px-8 rounded-xl border-b-8 border-[#f79533] tracking-wider">${name}</span> </section> <section class="my-8"> <ul class="flex flex-wrap gap-[10px]"> ${catPosts.map((post) => renderTemplate`${renderComponent($$result2, "Posts", $$Posts, { "frontmatter": post.frontmatter, "url": post.url })}`)} </ul> </section> <section class="flex justify-center"> ${renderComponent($$result2, "ButtonBack", $$ButtonBack, {})} </section> </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/tags/[tags].astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/tags/[tags].astro";
const $$url = "/tags/[tags]";

const _tags_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tags,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Posts as $, _tags_ as _, formatpubDate as a, $$ButtonBack as b, formatBlogPosts as f, slugify as s };
