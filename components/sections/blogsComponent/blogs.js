import "../../shared/headingComponent/heading.js";
export default class BlogsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./components/shared/blogsComponent/blogs.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		console.log("blogs");
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
			console.error("Error loading card template:", error);
		}
	}
}

// Register the custom element
customElements.define("card-component", BlogsComponent);
