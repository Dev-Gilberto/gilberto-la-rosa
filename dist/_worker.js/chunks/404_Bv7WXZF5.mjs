globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_B8jOpB0h.mjs').then(n => n._);

export { page };
