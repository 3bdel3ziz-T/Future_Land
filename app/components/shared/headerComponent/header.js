import { renderView } from "../../../core/renderView.js";

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
		${await renderView(this.templatePath)}`;
		window.addEventListener("resize", () => this.toggleMenu());
		this.toggleMenu();}
	toggleMenu() {
		const burger = document.body.querySelector("#toggle");
		if (window.innerWidth < 768) {
			burger.checked = true;
		} else {
			burger.checked = false;
		}
	}
}

// Register the custom element
window.customElements.define("header-component", HeaderComponent);
