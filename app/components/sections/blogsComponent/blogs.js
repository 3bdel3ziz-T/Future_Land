import "../../shared/headingComponent/heading.js";
export default class BlogsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/blogsComponent/blogs.html";
	blogsPath = "./app/assets/data/blogs.json";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await this.renderView()}`;
		// console.log(await this.getBlogs())
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			return await response.text();
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
	async getBlogs() {
		try {
			const response = await fetch(`${this.blogsPath}`);
			const blog = await response.text();
			return blog;
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
}

// Register the custom element
customElements.define("blogs-component", BlogsComponent);
