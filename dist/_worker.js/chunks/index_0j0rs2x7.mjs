globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_Cssh3Jei.mjs').then(n => n.i);

export { page };
