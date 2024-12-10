export default class FooterComponent extends HTMLElement {
	constructor() {
		super();
	}

	async connectedCallback() {
		await this.renderView();
	}
	async renderView() {
		try {
			const response = await fetch(
				"./components/shared/footerComponent/footer.html"
			);
			const template = await response.text();
			this.innerHTML = template;
		} catch (error) {
			console.error("Error loading footer template:", error);
		}
	}
}

// Register the custom element
customElements.define("footer-component", FooterComponent);
