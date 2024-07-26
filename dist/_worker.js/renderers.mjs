globalThis.process ??= {}; globalThis.process.env ??= {};
<<<<<<< HEAD
import { D as AstroUserError, A as AstroError } from './chunks/astro/assets-service_CAQf36mH.mjs';
import { M as AstroJSX, p as renderJSX, N as createVNode } from './chunks/astro/server_zRN-DKkT.mjs';

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function") return false;
=======
import { a3 as AstroJSX, A as AstroError, K as renderJSX, o as createVNode } from './chunks/astro_utylptCb.mjs';

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
>>>>>>> 7f1c80e (nueva version)
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
<<<<<<< HEAD
    throwEnhancedErrorIfMdxComponent(e, Component);
=======
    const error = e;
    if (Component[Symbol.for("mdx-component")]) {
      throw new AstroError({
        message: error.message,
        title: error.name,
        hint: `This issue often occurs when your MDX component encounters runtime errors.`,
        name: error.name,
        stack: error.stack
      });
    }
>>>>>>> 7f1c80e (nueva version)
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
<<<<<<< HEAD
  try {
    const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
    return { html };
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
    throw e;
  }
}
function throwEnhancedErrorIfMdxComponent(error, Component) {
  if (Component[Symbol.for("mdx-component")]) {
    if (AstroUserError.is(error)) return;
    throw new AstroError({
      message: error.message,
      title: error.name,
      hint: `This issue often occurs when your MDX component encounters runtime errors.`,
      name: error.name,
      stack: error.stack
    });
  }
}
const renderer = {
  name: "astro:jsx",
  check,
  renderToStaticMarkup
};
var server_default = renderer;
=======
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};
>>>>>>> 7f1c80e (nueva version)

const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { renderers };
