

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0e4af219.js","_app/immutable/chunks/index.8528c4bc.js","_app/immutable/chunks/singletons.cee8a68b.js"];
export const stylesheets = [];
export const fonts = [];
