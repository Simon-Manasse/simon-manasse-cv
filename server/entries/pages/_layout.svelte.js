import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-black "><header data-svelte-h="svelte-gpyclt"></header> <main class="">${slots.default ? slots.default({}) : ``}</main> <footer data-svelte-h="svelte-owhq1p"></footer> </div>`;
});
export {
  Layout as default
};
