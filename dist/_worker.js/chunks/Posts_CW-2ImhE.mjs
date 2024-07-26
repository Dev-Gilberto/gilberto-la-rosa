globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent } from './astro/server_zRN-DKkT.mjs';
import { $ as $$FormattedDate } from './FormattedDate_Br0ZJK-H.mjs';
/* empty css                         */

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const { title, image, pubDate, emojis, description, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="rounded bg-white p-4 sm:p-6 border border-[#212121] flex-1 flex mb-2" data-astro-cid-7nqkypoh> <article data-astro-cid-7nqkypoh> <span class="inline-block text-5xl pt-2" data-astro-cid-7nqkypoh>${image}</span> <a${addAttribute(`/blog/${slug}`, "href")} data-astro-cid-7nqkypoh> <h2 class="my-4 text-3xl font-[Antonio] font-bold uppercase tracking-wide hover:text-[#f79533] transition duration-150" data-astro-cid-7nqkypoh> <span class="md:hover:underline" data-astro-cid-7nqkypoh>${title}</span>${emojis} </h2> </a> <p class="mt-2 text-sm font-light" data-astro-cid-7nqkypoh> ${description} </p> <div class="text-sm font-medium uppercase mt-4 items-center flex justify-between" data-astro-cid-7nqkypoh> <a${addAttribute(`/blog/${slug}`, "href")} title="ver mas" class="group inline-flex gap-1 hover:text-[#f79533] transition duration-150 font-[Antonio] font-bold" data-astro-cid-7nqkypoh>
ver mas
<span aria-hidden="true" class="block duration-150 group-hover:ms-1 rtl:rotate-180" data-astro-cid-7nqkypoh>
&#10145;
</span> </a> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-7nqkypoh": true })} </div> </article> </li> `;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Posts.astro", void 0);

export { $$Posts as $ };
