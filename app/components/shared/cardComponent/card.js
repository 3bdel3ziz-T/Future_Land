export default class CardComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/cardComponent/card.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await this.renderView()}`;
		const imgPath = this.getAttribute("imgPath");
		this.shadowRoot.querySelector("img").src = imgPath;
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			return await response.text();
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
}

// Register the custom element
customElements.define("card-component", CardComponent);
