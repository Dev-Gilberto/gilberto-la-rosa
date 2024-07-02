globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                               */
import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderComponent, l as spreadAttributes, u as unescapeHTML, n as Fragment } from '../astro_DMCz-Pb0.mjs';
import { $ as $$Layout } from './404_lRoTYsDu.mjs';
/* empty css                          */
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

const $$Astro$a = createAstro("https://gilberto-la-rosa.xyz/");
const $$Marketing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Marketing;
  return renderTemplate`${maybeRenderHead()}<aside> <p class="mb-2 font-light"> <span class="font-semibold">¿Estás buscando mejorar tu página web o tienda en línea?</span> Si estás agotado de ver tutoriales en video o pagar por cursos costosos que
    no te enseñan nada, <span class="font-semibold">¡tengo la solución para ti!</span> Ofrezco clases virtuales personalizadas tipo mentoría con horarios flexibles.
    No esperes más, contáctame a través de estos medios digitales y te responderé
    tan pronto como sea posible.
</p> </aside>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Marketing.astro", void 0);

const $$Astro$9 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Email;
  return renderTemplate`${maybeRenderHead()}<a href="mailto:gilberto.larosa@codafter.cl" class="inline-flex gap-1 text-xl hover:underline duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="#b0bdc6" d="m38 64l-8.8-1.2v-49H38z"></path><path fill="#7d8b91" d="M44.3 13.8H38V64l6.3-6.1z"></path><path fill="#333" d="M46.8 0c-8.2 0-35.6 9.5-35.6 9.5l24.6 40.4l28.3-17V17C64 6.3 57.6 0 46.8 0"></path><path fill="#697277" d="M17.2 8.5C6.4 8.5 0 16 0 26.8v17l35.7 6.1V29.2c0-10.8-7.6-20.7-18.5-20.7"></path><path fill="#ed4c5c" d="M37.2 6.4v29.2l2.8-1.3V15.6l11.2-4.3V1.6z"></path><path fill="#333" d="m9.7 22.8l2.6.3l-.1 10.7l-1.7-.2l.1-7.2v-1.8l-1.7 8.7l-1.7-.2l-1.5-9.2v1.8l-.1 7.2l-1.6-.2V22l2.6.3l1.5 8.6zm6.7.8l2 .3L21.3 35l-1.9-.3l-.5-2.3l-3.2-.4l-.6 2.1l-1.9-.3zm-.2 6.7l2.2.3l-1-4.3zm7.8 5.1l-1.8-.2l.1-10.7l1.8.2zm1.8-10.5l1.8.2l-.1 8.7l4.3.6v1.9l-6-.8z"></path><path fill="#52595e" d="m19.6 16.4l-4.5 2.1l.3-3l3.2-1.5c1.2-.5 2.2 1.9 1 2.4"></path><path fill="#333" d="M18.4 16.1c.3 2.5-1.5 3.9-3 4c-.9.1-1.6-6.6-1.6-6.6s.9-.5 1.6-.5c1.5-.1 2.8 1.2 3 3.1"></path><ellipse cx="15.1" cy="16.7" fill="#52595e" rx="2.8" ry="3.5" transform="rotate(-5.957 15.074 16.69)"></ellipse><ellipse cx="15.1" cy="16.7" fill="#697277" rx="2.1" ry="2.6" transform="rotate(-5.957 15.074 16.688)"></ellipse></svg> gilberto.larosa@codafter.cl
</a>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Email.astro", void 0);

const $$Astro$8 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Posts;
  const { frontmatter, url } = Astro2.props;
  const { title, emojis, pubDate, image, description } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<li class="rounded-xl bg-white p-4 sm:p-6" data-astro-cid-7nqkypoh> <article data-astro-cid-7nqkypoh> <span class="inline-block text-5xl pt-2" data-astro-cid-7nqkypoh>${image.url}</span> <a${addAttribute(url, "href")} title="Guía paso a paso para ser un desarrollador web" data-astro-cid-7nqkypoh> <h2 class="my-4 text-3xl font-bold uppercase tracking-wide hover:text-[#f79533] transition duration-300" data-astro-cid-7nqkypoh> <span class="md:hover:underline" data-astro-cid-7nqkypoh>${title}</span>${emojis} </h2> </a> <p class="mt-2 text-base font-light" data-astro-cid-7nqkypoh> ${description} </p> <div class="text-sm font-medium uppercase mt-4 items-center flex justify-between" data-astro-cid-7nqkypoh> <a${addAttribute(url, "href")} title="Guía paso a paso para ser un desarrollador web" class="group inline-flex gap-1 hover:text-[#f79533] transition duration-300" data-astro-cid-7nqkypoh>
ver mas
<span aria-hidden="true" class="block duration-300 group-hover:ms-0.5 rtl:rotate-180" data-astro-cid-7nqkypoh>
&#10145;
</span> </a> <time datetime="" class="uppercase" data-astro-cid-7nqkypoh>publicación: ${formatpubDate(pubDate)}</time> </div> </article> </li> `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Posts.astro", void 0);

const $$Astro$7 = createAstro("https://gilberto-la-rosa.xyz/");
const $$AllTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AllTags;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blog/comandos-mas-usados-en-git.mdx": () => import('./comandos-mas-usados-en-git_bmX8kgqy.mjs').then(n => n.c),"../pages/blog/como-obtener-tu-primer-empleo-como-web-developer.mdx": () => import('./como-obtener-tu-primer-empleo-como-web-developer_ClMJ3Pzf.mjs'),"../pages/blog/como-utilizar-git-y-github-en-un-ambiente-profesional.mdx": () => import('./como-utilizar-git-y-github-en-un-ambiente-profesional_DHRKU-q9.mjs'),"../pages/blog/el-origen-de-javascript.mdx": () => import('./el-origen-de-javascript_CVSrp_MV.mjs'),"../pages/blog/guia-para-ser-un-desarrollador-web.mdx": () => import('./guia-para-ser-un-desarrollador-web_CvfKgz68.mjs'),"../pages/blog/que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx": () => import('./que-es-devin-el-primer-ingeniero-de-software-de-ia_BqTWYlzL.mjs'),"../pages/blog/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx": () => import('./que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo_lr-VCQ23.mjs')}), () => "../pages/blog/*.mdx");
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
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-wrap gap-2"> ${Object.entries(processedCats).map(([key, val]) => renderTemplate`<li class="rounded-lg  border-white border-2 border-dashed md:hover:bg-[#f79533]  md:hover:border-[#f79533] duration-300"> <a class="rounded-lg pl-2 inline-flex items-center"${addAttribute(`/tags/${slugify(key)}/`, "href")}> ${key}${" "} <span class="text-white ml-2 bg-[#f79533] py-1 px-2 font-medium rounded-lg"> ${showCount && `${val}`} </span> </a> </li>`)} </ul>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/AllTags.astro", void 0);

const $$Astro$6 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./comandos-mas-usados-en-git.mdx": () => import('./comandos-mas-usados-en-git_bmX8kgqy.mjs').then(n => n.c),"./como-obtener-tu-primer-empleo-como-web-developer.mdx": () => import('./como-obtener-tu-primer-empleo-como-web-developer_ClMJ3Pzf.mjs'),"./como-utilizar-git-y-github-en-un-ambiente-profesional.mdx": () => import('./como-utilizar-git-y-github-en-un-ambiente-profesional_DHRKU-q9.mjs'),"./el-origen-de-javascript.mdx": () => import('./el-origen-de-javascript_CVSrp_MV.mjs'),"./guia-para-ser-un-desarrollador-web.mdx": () => import('./guia-para-ser-un-desarrollador-web_CvfKgz68.mjs'),"./que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx": () => import('./que-es-devin-el-primer-ingeniero-de-software-de-ia_BqTWYlzL.mjs'),"./que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx": () => import('./que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo_lr-VCQ23.mjs')}), () => "./*.mdx");
  const formattedPosts = formatBlogPosts(allPosts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog \u{1F4DD} Gilberto La Rosa \u{1F680} Web Developer \u{1F30E}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto my-8"> <h1 class="text-6xl md:text-9xl font-bold capitalize">
Un blog <br> con gilberto
</h1> <p class="text-lg md:text-xl font-light">
Haz llegado al fascinante mundo del desarrollo web y la programación con
      mi simple y cautivador blog. Como desarrollador web experimentado, te
      llevare a un viaje por las intrincadas páginas de la programación y el
      diseño web.
</p> <!-- bloque principal de la pagina del blog  --> <section class="grid grid-cols-4 gap-4 my-8"> <!-- categorias y filtros --> <section class="col-span-4 md:col-span-1"> <section class="bg-[#6ab0e4] rounded-xl p-4 md:sticky md:top-4"> <h2 class="text-4xl font-bold mb-2">Categorias</h2> ${renderComponent($$result2, "AllTags", $$AllTags, { "showCount": "true" })} </section> </section> <!-- card blog posts --> <section class="col-span-4 md:col-span-2"> <ul class="flex flex-col gap-4"> ${formattedPosts.map((post) => renderTemplate`${renderComponent($$result2, "Posts", $$Posts, { "frontmatter": post.frontmatter, "url": post.url })}`)} </ul> </section> <!-- publicidad y otros  --> <section class="col-span-4 md:col-span-1"> <section class="bg-[#6ab0e4] rounded-xl p-4 md:sticky md:top-4"> <h2 class="text-4xl font-bold mb-2">
Clases de Diseño y Desarrollo Web Profesional
</h2> ${renderComponent($$result2, "Marketing", $$Marketing, {})} <hr class="py-2 border-current"> ${renderComponent($$result2, "Email", $$Email, {})} <p class="text-xs mt-4">
Nota: Los cupos son limitados, debido a que las clases son en línea
            y completamente personalizadas.
</p> </section> </section> </section> </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/blog/index.astro", void 0);

const $$file$1 = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const icons = {"local":{"prefix":"local","lastModified":1719928252,"icons":{"github":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></g>"},"linkedin":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0\" clip-rule=\"evenodd\"/>"},"logo":{"body":"<path fill=\"currentColor\" d=\"M21.163 13.184a2.852 2.852 0 0 0-.678.084 8.737 8.737 0 0 0-6.917-6.445 8.393 8.393 0 0 0-.441-.067c.026-.825.064-1.779 1.278-2.636l-.192-.484s-2.37.735-2.639 2.76c-.117-.551-1.22-1.24-1.767-1.371l-.272.438s.724.362.901 1.361a8.737 8.737 0 0 0-6.92 6.44 2.834 2.834 0 1 0-1.362 5.502 2.835 2.835 0 0 0 1.72-.114 8.682 8.682 0 0 0 .92 1.712l2.352-1.585c-.638-.807-1.02-1.988-1.087-3.173-.07-1.294.244-2.576 1.07-3.33 1.702-1.449 3.556-.788 4.713.6h.312c1.16-1.388 3.017-2.048 4.713-.6.825.754 1.14 2.038 1.07 3.33-.065 1.185-.448 2.366-1.087 3.173l2.353 1.585a8.685 8.685 0 0 0 .922-1.712 2.833 2.833 0 0 0 2.082-5.27 2.835 2.835 0 0 0-1.044-.198M2.786 16.848a.836.836 0 0 1 0-1.672.844.844 0 0 1 .469.144c.007.44.037.878.09 1.314-.148.134-.374.233-.559.214m18.427 0a.836.836 0 0 1-.558-.215 12.679 12.679 0 0 0 .09-1.314.835.835 0 0 1 1.304.693c.007.457-.383.858-.836.836\"/>"},"share":{"body":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M15 5.5a3.5 3.5 0 1 1 .994 2.443L11.67 10.21c.213.555.33 1.16.33 1.79a4.99 4.99 0 0 1-.33 1.79l4.324 2.267a3.5 3.5 0 1 1-.93 1.771l-4.475-2.346a5 5 0 1 1 0-6.963l4.475-2.347A3.524 3.524 0 0 1 15 5.5\"/></g>"},"x":{"body":"<path fill=\"currentColor\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>"}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$5 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$4 = createAstro("https://gilberto-la-rosa.xyz/");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, title, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(title, "title")} target="_blank" class="font-medium no-underline hover:underline duration-300">${name}</a>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Link.astro", void 0);

const $$Astro$3 = createAstro("https://gilberto-la-rosa.xyz/");
const $$AvatarFirma = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AvatarFirma;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center mb-4" data-astro-cid-72r55fzr> <img src="../../AVATAR-GILBERTO.jpg" alt="Gilberto La Rosa" data-astro-cid-72r55fzr> <p class="text-center font-light" data-astro-cid-72r55fzr> <span class="font-bold text-lg md:text-xl" data-astro-cid-72r55fzr>Gilberto La Rosa</span> <br data-astro-cid-72r55fzr>
Ingeniero de Sistemas
<br data-astro-cid-72r55fzr> <span class="capitalize" data-astro-cid-72r55fzr>web developer</span> </p> </section> `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/AvatarFirma.astro", void 0);

const $$Astro$2 = createAstro("https://gilberto-la-rosa.xyz/");
const $$TextIntro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextIntro;
  return renderTemplate`${maybeRenderHead()}<section class="text-center my-8 md:w-3/5 md:mx-auto text-lg md:text-xl"> <h2 class="text-left text-4xl md:text-8xl font-bold mb-4">
Un poco sobre mi
</h2> <section class="mb-4 text-left font-light tracking-wide"> <span class="flex items-center"> <span class="h-px flex-1 bg-black"></span> <h3 class="shrink-0 px-6 text-3xl md:text-5xl font-bold capitalize">
inicios
</h3> <span class="h-px flex-1 bg-black"></span> </span> <p>
Como ingeniero de sistemas y desarrollador web, mi experiencia ha estado
      marcada por el mundo de la tecnología, en constante evolución. Desde el
      desarrollo de software hasta la programación y las bases de datos, he
      tenido la oportunidad de trabajar en una amplia gama de proyectos que han
      mejorado mis habilidades y conocimientos en estas áreas. Uno de los
      aspectos más apasionantes de mi trabajo es el aprendizaje y la adaptación
      constantes que se requieren para estar al día de los últimos avances
      tecnológicos. Este campo evoluciona constantemente y, como profesional, es
      crucial mantenerse a la vanguardia ampliando continuamente mis
      conocimientos y explorando nuevas tecnologías.
</p> <span class="flex items-center"> <span class="h-px flex-1 bg-black"></span> <h3 class="shrink-0 px-6 text-3xl md:text-5xl font-bold capitalize">
laborando
</h3> <span class="h-px flex-1 bg-black"></span> </span> <p>
En mi puesto de ingeniero de sistemas, he sido responsable del diseño y la
      implantación de complejos sistemas de software que responden a necesidades
      empresariales específicas. Esto implica analizar requisitos, desarrollar
      soluciones y garantizar la integración sin problemas de diversas
      tecnologías. La capacidad de pensamiento crítico y de resolución de
      problemas es esencial en esta función, ya que a menudo implica la
      resolución de problemas y la búsqueda de soluciones innovadoras a los
      desafíos técnicos. Además, mi experiencia como desarrollador web me ha
      permitido crear sitios web fáciles de usar y visualmente atractivos que
      comunican información de forma eficaz y atraen a los usuarios. Al trabajar
      con lenguajes de programación como ${renderComponent($$result, "Link", $$Link, { "href": "https://es.wikipedia.org/wiki/HTML", "title": "HTML", "name": "HTML" })}, ${renderComponent($$result, "Link", $$Link, { "href": "https://es.wikipedia.org/wiki/CSS", "title": "CSS", "name": "CSS" })},
${renderComponent($$result, "Link", $$Link, { "href": "https://es.wikipedia.org/wiki/JavaScript", "title": "JavaScript", "name": "JavaScript" })} y ${renderComponent($$result, "Link", $$Link, { "href": "https://es.wikipedia.org/wiki/PHP", "title": "PHP", "name": "PHP" })} soy capaz de dar vida a los diseños y optimizar los sitios web en cuanto
      a rendimiento y funcionalidad.
</p> <span class="flex items-center"> <span class="h-px flex-1 bg-black"></span> <h3 class="shrink-0 px-6 text-3xl md:text-5xl font-bold capitalize">
experiencia
</h3> <span class="h-px flex-1 bg-black"></span> </span> <p>
Otro aspecto importante de mi experiencia es el trabajo con bases de
      datos. Desde el diseño y la implementación de estructuras de bases de
      datos hasta la gestión de datos y la optimización del rendimiento de las
      consultas, he adquirido valiosos conocimientos en este ámbito. Las bases
      de datos desempeñan un papel crucial en el almacenamiento y la
      organización de datos para aplicaciones informáticas, y mi experiencia en
      este campo me ha permitido garantizar la integridad y la accesibilidad de
      los datos para diversos proyectos. En general, mi experiencia como
      ingeniero de sistemas y desarrollador web me ha proporcionado un amplio
      conocimiento de la tecnología y sus aplicaciones, lo que me permite
      contribuir eficazmente a proyectos en estos ámbitos.
</p> </section> </section> ${renderComponent($$result, "AvatarFirma", $$AvatarFirma, {})}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/TextIntro.astro", void 0);

const $$Astro$1 = createAstro("https://gilberto-la-rosa.xyz/");
const $$SocialNetwork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialNetwork;
  return renderTemplate`${maybeRenderHead()}<aside> <nav class="flex justify-center gap-8 items-center"> <a href="https://www.linkedin.com/in/gilberto-la-rosa/" sr-only="linkedin" target="_blank" title="linkedin" class="hover:text-[#f79533] transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "class": "hover:text-[#f79533] duration-300", "size": 35 })} </a> <a href="https://twitter.com/dev_gilberto" sr-only="X" title="X" target="_blank" class="hover:text-[#a166ab] transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "x", "class": "hover:text-[#a166ab] duration-300", "size": 35 })} </a> <a href="https://github.com/Dev-Gilberto" sr-only="github" target="_blank" title="github" class="hover:text-[#6fba82] transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "hover:text-[#6fba82] duration-300", "size": 35 })} </a> </nav> </aside>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/SocialNetwork.astro", void 0);

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gilberto La Rosa \u{1F680} Web Developer \u{1F30E}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto mb-8"> ${renderComponent($$result2, "TextIntro", $$TextIntro, {})} ${renderComponent($$result2, "SocialNetwork", $$SocialNetwork, {})} </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/index.astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, $$Posts as a, $$SocialNetwork as b, formatpubDate as c, index as d, formatBlogPosts as f, index$1 as i, slugify as s };
