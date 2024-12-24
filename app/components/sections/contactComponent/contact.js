import { renderView } from "../../../core/renderView.js";
import { injector } from "../../../core/dataInjector.js";
import { companyInfo as info } from "../../../global/info.js";
import "../../shared/copyComponent/copy.js";
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
  ${await injector(await renderView(this.templatePath), info)}`;
		const form = Array.from(
			this.shadowRoot.querySelectorAll("form label input")
		);
		const [firstName, lastName, email, phone, submit] = form;
		const formObj = {
			firstName: {
				input: firstName,
				regex: /^[a-zA-Z]{4,12}$/,
				isMatched: false,
			},
			lastName: {
				input: lastName,
				regex: /^[a-zA-Z]{4,12}$/,
				isMatched: false,
			},
			email: {
				input: email,
				regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				isMatched: false,
			},
			phone: {
				input: phone,
				regex: /^[0-9]{10}$/,
				isMatched: false,
			},
			submit: {
				input: submit,
				isMatched: false,
			},
		};
		for (let key in formObj) {
			const { input, regex } = formObj[key];
			input.addEventListener("input", () => {
				this.regexCheck(input, regex);
			});
		}
		submit.addEventListener("click", (e) => {
			e.preventDefault();
			this.checkForm();
		});
	}
	regexCheck(input, regex) {
		if (input.value.test(regex)) {
			input.classList.remove("invalid-field");
		} else {
			input.classList.add("invalid-field");
			const warnMsgEl = input.nextElementSibling;
			warnMsgEl.classList.add("opacity-100");
			warnMsgEl.textContent = `Please enter a valid ${input.placeholder}`;
		}
	}
}

// Register the custom element
customElements.define("contact-component", ContactComponent);
