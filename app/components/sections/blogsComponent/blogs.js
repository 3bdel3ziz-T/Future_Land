import "../../shared/headingComponent/heading.js";
import { renderView } from "../../../core/renderView.js";
import { getThis } from "../../../core/getThis.js";

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
  ${await renderView(this.templatePath)}`;
		await this.renderBlogs(this.shadowRoot);
	}
	async renderBlogs(template) {
		getThis(this.blogsPath).then((blogs) => {
			const sideArticlesEl = template.querySelector("#side-articles");
			for (let item of blogs) {
				const blogItemTemplate = `
					<div class="flex gap-4">
					<img src="${item.img_src}" alt="Article Image" class="rounded-lg w-28 h-28 loading="lazy" object-cover">
					<div>
						<p class="text-sm text-gray-600">Lana Steiner • ${item.date}</p>
						<h3 class="text-lg font-semibold mt-1">${item.title}</h3>
						<p class="text-sm text-gray-700 mt-2 line-clamp-2">
							${item.description}
						</p>
						<div class="flex gap-2 mt-2">
							<span class="px-3 py-1 bg-gray-200 text-sm rounded-md">Health</span>
							<span class="px-3 py-1 bg-gray-200 text-sm rounded-md">Research</span>
						</div>
					</div>
				</div>`;
				sideArticlesEl.innerHTML += blogItemTemplate;
			}
		});
	}
}

// Register the custom element
customElements.define("blogs-component", BlogsComponent);
