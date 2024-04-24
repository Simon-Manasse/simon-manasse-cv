

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f1e6a2b2.js","_app/immutable/chunks/index.8528c4bc.js","_app/immutable/chunks/singletons.51c4c753.js"];
export const stylesheets = [];
export const fonts = [];
