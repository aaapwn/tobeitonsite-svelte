import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.e0fbe603.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.4e2fe401.js"];
export const stylesheets = ["_app/immutable/assets/2.3093cbe0.css"];
export const fonts = [];
