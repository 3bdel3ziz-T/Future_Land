export default class HeaderComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/headerComponent/header.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="${this.styleSheetPath}">
		${await this.renderView()}`;
		// this.linkActiveState(this.shadowRoot)
		window.addEventListener("resize", () => {
			if (window.innerWidth < 768) {
				const burger = this.shadowRoot.querySelector("#toggle");
				burger.checked = true;
			} else {
				const burger = this.shadowRoot.querySelector("#toggle");
				burger.checked = false;
			}
		});
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
window.customElements.define("header-component", HeaderComponent);
