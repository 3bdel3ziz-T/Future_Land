import { getThis } from "../../../core/getThis.js";

export default class LoadingComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/loadingComponent/loading.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		// this.start()
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${this.styleSheetPath}">
        ${await getThis(this.templatePath)}`;
	}
	start() {
		const loadingEl = document.querySelector("loading-component");
		loadingEl.classList.remove("hidden");
	}
	stop() {
		const loadingEl = document.querySelector("loading-component");
		loadingEl.classList.add("hidden");
	}
}

// Register the custom element
customElements.define("loading-component", LoadingComponent);
