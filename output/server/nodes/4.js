import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.179f01d2.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.4e2fe401.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.1466a26b.js"];
export const stylesheets = ["_app/immutable/assets/4.9d501049.css"];
export const fonts = [];
