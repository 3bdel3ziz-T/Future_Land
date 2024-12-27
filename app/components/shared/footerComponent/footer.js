import { companyInfo as info } from "../../../global/info.js";
import { getThis } from "../../../core/getThis.js";
import { injector } from "../../../core/dataInjector.js";

import "../copyComponent/copy.js";

export default class FooterComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/footerComponent/footer.html";
	currentYear = new Date().getFullYear();
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	onHover() {
		console.log("Hover event triggered");
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="${this.styleSheetPath}">
				${injector(await getThis(this.templatePath), info)} `;
		const year = this.shadowRoot.querySelector("#currentYear");
		year.textContent = this.currentYear;
	}
}

// Register the custom element
customElements.define("footer-component", FooterComponent);
