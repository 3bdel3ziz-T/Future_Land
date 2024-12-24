import "../../shared/headingComponent/heading.js";
import "../../shared/cardComponent/card.js";
import { renderView } from "../../../core/renderView.js";

export default class HomeComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/homeComponent/home.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await renderView(this.templatePath)}`;

		const svgHeroPath = this.shadowRoot.querySelector(".svg-path-hero");
		const pathHeroLength = svgHeroPath.getTotalLength();
		svgHeroPath.style.cssText = `
			stroke-dasharray: ${pathHeroLength} ${pathHeroLength};
			stroke-dashoffset: ${pathHeroLength};`;
		svgHeroPath.addEventListener("animationend", () => {
			svgHeroPath.classList.remove("animate-drawSvg");
			svgHeroPath.classList.add("animate-undrawHeroSvg");
		});
	}
}

// Register the custom element
window.customElements.define("home-component", HomeComponent);
