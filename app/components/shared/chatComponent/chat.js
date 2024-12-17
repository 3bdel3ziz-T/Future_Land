import { renderView } from "../../../core/renderView.js";

export default class ChatComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/chatComponent/chat.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="${this.styleSheetPath}">
		${await renderView(this.templatePath)}`;
	}
}

// Register the custom element
window.customElements.define("chat-component", ChatComponent);
