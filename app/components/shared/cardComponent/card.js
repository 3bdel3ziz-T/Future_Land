import { renderView } from "../../../core/renderView.js";
export default class CardComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/cardComponent/card.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await renderView(this.templatePath)}`;
		const loadingImgPath = this.getAttribute("loadingImgPath");
		const img = this.shadowRoot.querySelector("img");
		this.pendingImages(img, loadingImgPath).then(() => {
			const imgPath = this.getAttribute("imgPath");
			img.src = imgPath;
		});
	}
	pendingImages(element, loadingImgPath) {
		return new Promise((resolve) => {
			element.style.cssText = `
			background-image: url(${loadingImgPath});
			background-repeat: no-repeat;
			background-size: cover;
			filter: blur(6px);
			`;
			resolve();
		});
	}
}

// Register the custom element
customElements.define("card-component", CardComponent);
