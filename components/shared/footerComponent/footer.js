export default class FooterComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./components/shared/footerComponent/footer.html";
	currentYear = new Date().getFullYear();
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="${this.styleSheetPath}">
				${await this.renderView()}`;
		const year = this.shadowRoot.querySelector("#currentYear");
		year.textContent = this.currentYear;
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
customElements.define("footer-component", FooterComponent);
