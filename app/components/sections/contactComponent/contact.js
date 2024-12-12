// export default class ContactComponent extends HTMLElement {
// 	styleSheetPath = "./app/styles/output.css";
// 	templatePath = "./app/components/sections/contactComponent/contact.html";
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: "open" });
// 	}

// 	async connectedCallback() {
// 		this.shadowRoot.innerHTML = `
//     <link rel="stylesheet" href="${this.styleSheetPath}">
//   ${await this.renderView()}`;
// 	}
// 	async renderView() {
// 		try {
// 			const response = await fetch(`${this.templatePath}`);
//       console.log(await response.text())
// 			return await response.text();
// 		} catch (error) {
// 			console.error(`Error: ${error}`);
// 		}
// 	}
// }

// // Register the custom element
// customElements.define("contact-component", ContactComponent);
