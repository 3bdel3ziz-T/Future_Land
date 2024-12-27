import { getThis } from "../../../core/getThis.js";
import { injector } from "../../../core/injector.js";
import { companyInfo as info } from "../../../global/info.js";
import "./formComponent/form.js";
import "../../shared/copyComponent/copy.js";
export default class ContactComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/contactComponent/contact.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await injector(await getThis(this.templatePath), info)}`;
	}
}

// Register the custom element
customElements.define("contact-component", ContactComponent);
