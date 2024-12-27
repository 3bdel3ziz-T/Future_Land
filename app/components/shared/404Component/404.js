import { getThis } from "../../../core/getThis.js";
export default class p404Component extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/404Component/404.html";
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
customElements.define("p404-component", p404Component);
