import "../../shared/headingComponent/heading.js";
import { getThis } from "../../../core/getThis.js";
import { repeater } from "../../../core/repeater.js";

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
  ${await getThis(this.templatePath)}`;
		repeater(
			this.shadowRoot.querySelector("#side-holder"),
			this.blogsPath,
			this.blogItemPath
		);
	}
}

// Register the custom element
customElements.define("blogs-component", BlogsComponent);
