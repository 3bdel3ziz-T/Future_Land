import { companyInfo } from "../../../global/info.js";
export default class FooterComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/shared/footerComponent/footer.html";
	currentYear = new Date().getFullYear();
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="${this.styleSheetPath}">
				${await this.renderView()}`;
		const year = this.shadowRoot.querySelector("#currentYear");
		year.textContent = this.currentYear;
	}
	async renderView() {
		try {
			const response = await fetch(`${this.templatePath}`);
			const template = await response.text();
			// this.injectData(template, companyInfo);
			return template;
		} catch (error) {
			console.error(`Error: ${error}`);
		}
	}
	// injectData(template, data) {
	// 	const regex = /{{( +)?\w+(.\w+)?( +)?}}/g;
	// 	const interPolation = Array.from(template.match(regex));
	// 	interPolation.forEach((e) => {
	// 		const val = `'${e
	// 			.slice(2, e.length - 2)
	// 			.trim()
	// 			.split(".")
	// 			.join("']['")}'`;
	// 		console.log(`[${val}]`);
	// 		// e.slice(2, e.length - 2);
	// 		// data[(e.slice(2, e.length - 2)).trim()];
	// 	});
	// 	console.log(data);
	// 	// template.replace(regex, (key) => 'something');
	// 	// template.match(regex)
	// 	// template.replace(regex, (match, key) => 'Future land');
	// 	// return template.replace(regex, (match, key) => data[key.trim()]);
	// }
}

// Register the custom element
customElements.define("footer-component", FooterComponent);
