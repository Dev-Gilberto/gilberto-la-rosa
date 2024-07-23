globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_DF50JbGT.mjs';
import { a as $$Icon } from './Layout_G-QiqGG-.mjs';

const $$SocialNetwork = createComponent(($$result, $$props, $$slots) => {
  const rrss = [
    {
      url: "https://www.linkedin.com/in/gilberto-la-rosa/",
      name: "linkedin",
      icon: "linkedin"
    },
    {
      url: "https://twitter.com/gilbertoxdev",
      name: "x",
      icon: "x"
    },
    {
      url: "mailto:gilberto.larosa@codafter.codes",
      name: "gilberto.larosa@codafter.codes",
      icon: "mail"
    },
    {
      url: "https://github.com/gilbertoxdev",
      name: "github",
      icon: "github"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<aside> <nav> <ul class="flex flex-wrap justify-center gap-4 items-center"> ${rrss.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")}${addAttribute(item, "sr-only")} target="_blank"${addAttribute(item.name, "title")} class="hover:text-[#f79533] transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "class": "hover:text-[#f79533] duration-150", "size": 35 })} </a> </li>`)} </ul> </nav> </aside>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/SocialNetwork.astro", void 0);

export { $$SocialNetwork as $ };
