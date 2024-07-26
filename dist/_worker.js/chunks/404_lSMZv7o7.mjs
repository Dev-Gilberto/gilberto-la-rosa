globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_CYNjVRzL.mjs').then(n => n._);

export { page };
