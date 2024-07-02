globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_H5hb9Prs.mjs').then(n => n._);

export { page };
