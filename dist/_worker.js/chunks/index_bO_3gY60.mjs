globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_BYCoVhkf.mjs').then(n => n.d);

export { page };
