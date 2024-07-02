globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_-uX-6ZNG.mjs').then(n => n.d);

export { page };
