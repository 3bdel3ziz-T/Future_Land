// export default class BlogItemComponent extends HTMLElement {
// 	styleSheetPath = "./app/styles/output.css";
// 	templatePath =
// 		"./app/components/sections/blogsComponent/blogItemComponent/blogItem.html";
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: "open" });
// 	}

// 	async connectedCallback() {
// 		this.shadowRoot.innerHTML = `
//     <link rel="stylesheet" href="${this.styleSheetPath}">
//   ${await this.renderView()}`;

// 		// this.getAttribute("blogDirection")
// 	}
// 	async renderView() {
// 		try {
// 			const response = await fetch(`${this.templatePath}`);
// 			const template = await response.text();
// 			return template;
// 		} catch (error) {
// 			console.error(`Error: ${error}`);
// 		}
// 	}
// }

// // Register the custom element
// customElements.define("blog-item", BlogItemComponent);
