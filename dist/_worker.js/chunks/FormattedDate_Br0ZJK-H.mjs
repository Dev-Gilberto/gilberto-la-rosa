globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_zRN-DKkT.mjs';

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date ? date.toISOString() : null, "datetime")} class="capitalize">
publicación: <span class="uppercase"> ${date ? date.toLocaleDateString("es", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : null}</span> </time>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
