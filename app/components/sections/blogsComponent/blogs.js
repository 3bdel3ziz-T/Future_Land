import "../../shared/headingComponent/heading.js";
import { getThis } from "../../../core/getThis.js";
import { injector } from "../../../core/injector.js";
import { repeater } from "../../../core/repeater.js";

export default class BlogsComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/blogsComponent/blogs.html";
	blogsPath = "./app/assets/data/blogs.json";
	blogItemPath =
		"./app/components/sections/blogsComponent/blogItemTemplate/blogItem.html";

	mainArticle = {
		name: "Main Article",
		description:
			"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
		date: "Oct 27, 2022",
		img_src: "./app/assets/images/dates_4.png",
	};

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${injector(await getThis(this.templatePath), this.mainArticle)}`;

		repeater(
			this.shadowRoot.querySelector("#side-holder"),
			this.blogsPath,
			this.blogItemPath
		);
	}
}

// Register the custom element
customElements.define("blogs-component", BlogsComponent);
