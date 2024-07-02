globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_B9xyzEcY.mjs').then(n => n._);

export { page };
