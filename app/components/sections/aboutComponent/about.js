import "../../shared/headingComponent/heading.js";
export default class aboutComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/aboutComponent/about.html";
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
window.customElements.define("about-component", aboutComponent);
