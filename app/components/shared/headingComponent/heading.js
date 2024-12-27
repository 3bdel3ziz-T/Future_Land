import { getThis } from "../../../core/getThis.js";

export default class HeadingComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/headingComponent/heading.html";
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

window.customElements.define("heading-component", HeadingComponent);
