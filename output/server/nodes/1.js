

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f7d3b4ff.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.4e2fe401.js","_app/immutable/chunks/stores.63222f9b.js","_app/immutable/chunks/singletons.1466a26b.js"];
export const stylesheets = [];
export const fonts = [];
