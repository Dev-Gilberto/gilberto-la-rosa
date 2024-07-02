globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_B_PhpaF-.mjs').then(n => n._);

export { page };
