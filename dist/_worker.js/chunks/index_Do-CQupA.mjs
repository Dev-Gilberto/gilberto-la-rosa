globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_BYCoVhkf.mjs').then(n => n.i);

export { page };
