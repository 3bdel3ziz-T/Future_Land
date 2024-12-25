import "../../shared/headingComponent/heading.js";
import "./itemComponent/item.js";
import { renderView } from "../../../core/renderView.js";

export default class productsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/productsComponent/products.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await renderView(this.templatePath)}`;
	}
}

// Register the custom element
window.customElements.define("products-component", productsComponent);
