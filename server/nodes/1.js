

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b903bd62.js","_app/immutable/chunks/index.8528c4bc.js","_app/immutable/chunks/singletons.b72c040a.js"];
export const stylesheets = [];
export const fonts = [];
