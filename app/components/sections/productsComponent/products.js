import "../../shared/headingComponent/heading.js";
import { renderView } from "../../../core/renderView.js";
import { repeater } from "../../../core/repeater.js";

export default class productsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/productsComponent/products.html";
	productsPath = "./app/assets/data/products.json";
	productItemPath =
		"./app/components/sections/productsComponent/productItemTemplate/item.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
		${await renderView(this.templatePath)}`;
		repeater(
			this.shadowRoot.querySelector("#products-holder"),
			this.productsPath,
			this.productItemPath
		);
	}
}

// Register the custom element
window.customElements.define("products-component", productsComponent);
