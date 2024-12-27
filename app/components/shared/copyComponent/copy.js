import { getThis } from "../../../core/getThis.js";

export default class CopyComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/copyComponent/copy.html";
	showOnHover = false;
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="${this.styleSheetPath}">
		${await getThis(this.templatePath)} `;
		const input = this.shadowRoot.querySelector("input#copy"),
			label = this.shadowRoot.querySelector('label[for="copy"]');
		this.parentElement.addEventListener("mouseover", () =>
			label.classList.add("scale-100")
		);
		this.parentElement.addEventListener("mouseout", () =>
			label.classList.remove("scale-100")
		);
		input.addEventListener("change", () => {
			navigator.clipboard.writeText(this.getAttribute("copyText"));
			setTimeout(() => {
				label.classList.remove("scale-100");
				input.checked = false;
			}, 600);
		});
	}
}

// Register the custom element
customElements.define("copy-component", CopyComponent);
