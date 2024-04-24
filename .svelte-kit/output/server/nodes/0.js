

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7942e057.js","_app/immutable/chunks/index.8528c4bc.js"];
export const stylesheets = ["_app/immutable/assets/0.b41213e6.css"];
export const fonts = [];
