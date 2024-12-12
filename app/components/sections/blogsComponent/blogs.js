import "../../shared/headingComponent/heading.js";
// import "./blogItemComponent/blogItem.js";
export default class BlogsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/blogsComponent/blogs.html";
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
			console.error(`Error: ${error}`);
		}
	}
}

// Register the custom element
customElements.define("card-component", BlogsComponent);
