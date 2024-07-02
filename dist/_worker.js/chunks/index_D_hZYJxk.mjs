globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_B-r8v0Hv.mjs').then(n => n.d);

export { page };
