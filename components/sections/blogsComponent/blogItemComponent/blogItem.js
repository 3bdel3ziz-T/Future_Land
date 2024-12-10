export default class BlogsItemComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./components/shared/BlogsItemComponent/BlogsItem.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await this.renderView()}`;
    this.getAttribute("blogDirection")
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			return await response.text();
		} catch (error) {
			console.error("Error loading card template:", error);
		}
	}
}

// Register the custom element
customElements.define("card-component", BlogsItemComponent);
