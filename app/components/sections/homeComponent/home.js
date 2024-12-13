import "../../shared/headingComponent/heading.js";
import "../../shared/cardComponent/card.js";
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
  ${await this.renderView()}`;
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			return await response.text();
		} catch (error) {
			console.error("Error loading header template:", error);
		}
	}
}

// Register the custom element
window.customElements.define("home-component", HomeComponent);
