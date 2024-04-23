

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f340c06d.js","_app/immutable/chunks/index.8528c4bc.js"];
export const stylesheets = ["_app/immutable/assets/0.aca1a3e4.css"];
export const fonts = [];
