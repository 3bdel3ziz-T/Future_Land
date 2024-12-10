export default class CardComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = await this.renderView();
	}
	async renderView() {
		try {
			const response = await fetch(
				"./components/shared/cardComponent/card.html"
			);
			return await response.text();
		} catch (error) {
			console.error("Error loading card template:", error);
		}
	}
}

// Register the custom element
customElements.define("card-component", CardComponent);
