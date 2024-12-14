export default class UpComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/upComponent/up.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		this.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="${this.styleSheetPath}">
		${await this.renderView()}`;
		const button = this.shadowRoot.querySelector("button");
		window.onscroll = () => {
			if (window.scrollY > 500) {
				button.classList.remove("scale-0");
				button.classList.add("scale-100");
			} else {
				button.classList.remove("scale-100");
				button.classList.add("scale-0");
			}
		};
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			const template = await response.text();
			return template;
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
}

// Register the custom element
window.customElements.define("up-component", UpComponent);
