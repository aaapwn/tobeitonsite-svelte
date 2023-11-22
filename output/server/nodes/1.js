

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.552e425e.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.4e2fe401.js","_app/immutable/chunks/stores.41b2a264.js","_app/immutable/chunks/singletons.f72142bd.js"];
export const stylesheets = [];
export const fonts = [];
