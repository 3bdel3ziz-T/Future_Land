export default class Header extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./components/shared/headerComponent/header.html";
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
			const template = await response.text();
			return template;
		} catch (error) {
			console.error("Error loading footer template:", error);
		}
	}
}

// Register the custom element
window.customElements.define("header-component", Header);
