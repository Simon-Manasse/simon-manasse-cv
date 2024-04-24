import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-black "><header></header>
	<main class="">${slots.default ? slots.default({}) : ``}</main>

	<footer></footer>
</div>`;
});
export {
  Layout as default
};
