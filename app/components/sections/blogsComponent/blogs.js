import "../../shared/headingComponent/heading.js";
import { renderView } from "../../../core/renderView.js";
import { getThis } from "../../../core/getThis.js";
import { injector } from "../../../core/dataInjector.js";

export default class BlogsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/blogsComponent/blogs.html";
	blogsPath = "./app/assets/data/blogs.json";
	blogItemPath =
		"./app/components/sections/blogsComponent/blogItemTemplate/blogItem.html";

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await renderView(this.templatePath)}`;
		await this.renderBlogs(this.shadowRoot);
	}
	async renderBlogs(template) {
		const blogItemTemplate = await renderView(this.blogItemPath);
		getThis(this.blogsPath).then((blogs) => {
			const sideArticlesEl = template.querySelector("#side-articles");
			for (let item of blogs) {
				sideArticlesEl.innerHTML += injector(blogItemTemplate, item);
			}
		});
	}
}

// Register the custom element
customElements.define("blogs-component", BlogsComponent);
