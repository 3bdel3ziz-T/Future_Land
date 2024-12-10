// components/shared/headingComponent/heading.js
export default class HeadingComponent extends HTMLElement {
  constructor() {
    super();
	}

	async connectedCallback() {
		await this.renderView();
	}

	async renderView() {
		try {
			const response = await fetch(
				"./components/shared/headingComponent/heading.html"
			);
			const template = await response.text();
			this.innerHTML = template;
		} catch (error) {
			console.error("Error loading heading template:", error);
		}
	}
}

window.customElements.define("heading-component", HeadingComponent);
