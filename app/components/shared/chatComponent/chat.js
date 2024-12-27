import { getThis } from "../../../core/getThis.js";

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
		${await getThis(this.templatePath)}`;
		const label = this.shadowRoot.querySelector("label[for='chat']");
		const input = this.shadowRoot.querySelector("#chat");
		setInterval(() => {
			if (!input.checked) {
				label.classList.add("animate-chat");
				setTimeout(() => {
					label.classList.remove("animate-chat");
				}, 1200);
			}
		}, 5000);
	}
}

// Register the custom element
window.customElements.define("chat-component", ChatComponent);
