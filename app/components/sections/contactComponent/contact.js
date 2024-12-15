export default class ContactComponent extends HTMLElement {
	styleSheetPath = "./app/styles/output.css";
	templatePath = "./app/components/sections/contactComponent/contact.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="${this.styleSheetPath}">
  ${await this.renderView()}`;
		const form = Array.from(
			this.shadowRoot.querySelectorAll("form label input")
		);
		const [firstName, lastName, email, phone, textarea] = form;

		// this.checkFormValidation(firstName, lastName, email, phone, textarea);
		// 	Array.from(this.shadowRoot.querySelectorAll("form label input"));
	}
	regexCheck(input, regex) {
		if (input.value.match(regex)) {
			input.classList.remove("invalid-field");
		} else {
			input.classList.add("invalid-field");
			const wrongMessageEl = input.nextElementSibling;
			wrongMessageEl.classList.add("opacity-100");
			wrongMessageEl.textContent = `Please enter a valid ${input.placeholder}`;
		}
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
customElements.define("contact-component", ContactComponent);
