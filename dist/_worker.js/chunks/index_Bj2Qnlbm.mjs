globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index__HOLemVR.mjs').then(n => n.b);

export { page };
