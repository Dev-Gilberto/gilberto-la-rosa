globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/el-origen-de-javascript_CVSrp_MV.mjs');

export { page };
