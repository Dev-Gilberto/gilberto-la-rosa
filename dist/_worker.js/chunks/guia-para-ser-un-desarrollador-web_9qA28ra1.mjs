globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/guia-para-ser-un-desarrollador-web_BQRO_bTV.mjs');

export { page };
