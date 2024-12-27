import "../../shared/headingComponent/heading.js";
import { getThis } from "../../../core/getThis.js";

export default class aboutComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/aboutComponent/about.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await getThis(this.templatePath)}`;
	}
}

// Register the custom element
window.customElements.define("about-component", aboutComponent);
