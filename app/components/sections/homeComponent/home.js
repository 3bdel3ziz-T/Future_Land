import "../../shared/headingComponent/heading.js";
import "../../shared/cardComponent/card.js";
import { renderView } from "../../../core/renderView.js";

export default class HomeComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/homeComponent/home.html";
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
window.customElements.define("home-component", HomeComponent);
