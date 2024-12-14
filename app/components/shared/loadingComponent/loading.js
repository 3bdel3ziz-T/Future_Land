export default class LoadingComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/loadingComponent/loading.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${this.styleSheetPath}">
      <div 
      class='${this.dataset.loading_state != "true" ? "hidden" : false}'>
        ${await this.renderView()}
        </div>`;
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			return await response.text();
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
}

// Register the custom element
customElements.define("loading-component", LoadingComponent);
