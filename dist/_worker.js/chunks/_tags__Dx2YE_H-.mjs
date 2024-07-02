globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_Z8Q_fMfU.mjs').then(n => n._);

export { page };
