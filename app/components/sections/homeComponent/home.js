import "../../shared/headingComponent/heading.js";
import { getThis } from "../../../core/getThis.js";
import { repeater } from "../../../core/repeater.js";

export default class HomeComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/homeComponent/home.html";
	cardsDataPath = "./app/assets/data/home_data/cards.json";
	cardsTemplatePath =
		"./app/components/sections/homeComponent/cardTemplate/card.html";
	valuesDataPath = "./app/assets/data/home_data/values.json";
	valuesTemplatePath =
		"./app/components/sections/homeComponent/valueTemplate/value.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await getThis(this.templatePath)}`;
		repeater(
			this.shadowRoot.querySelector("#services-holder"),
			this.cardsDataPath,
			this.cardsTemplatePath
		);
		repeater(
			this.shadowRoot.querySelector("#values-holder"),
			this.valuesDataPath,
			this.valuesTemplatePath
		);

		const svgHeroPath = this.shadowRoot.querySelector(".svg-path-hero");
		const pathHeroLength = svgHeroPath.getTotalLength();
		svgHeroPath.style.cssText = `
			stroke-dasharray: ${pathHeroLength} ${pathHeroLength};
			stroke-dashoffset: ${pathHeroLength};`;
		svgHeroPath.addEventListener("animationend", () => {
			svgHeroPath.classList.remove("animate-drawSvg");
			svgHeroPath.classList.add("animate-undrawHeroSvg");
			svgHeroPath.addEventListener("animationend", () => {
				svgHeroPath.parentElement.remove();
			});
		});
	}
}

// Register the custom element
window.customElements.define("home-component", HomeComponent);
