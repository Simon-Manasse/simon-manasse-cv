

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D0cVF1-E.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/chunks/index.BZRb3Aqr.js"];
export const stylesheets = [];
export const fonts = [];
