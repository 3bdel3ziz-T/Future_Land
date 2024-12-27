import { getThis } from "../../../core/getThis.js";
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
  ${await injector(await getThis(this.templatePath), info)}`;
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
		};
		for (let key in formObj) {
			const { input, regex, isMatched } = formObj[key];
			input.addEventListener("input", () => {
				this.checkValidation(input, regex, isMatched);
			});
		}
		submit.addEventListener("click", (e) => {
			e.preventDefault();
			for (let key in formObj) {
				const { input, regex, isMatched } = formObj[key];
				if (!isMatched) {
					this.checkValidation(input, regex, isMatched);
				}
			}
		});
	}
	checkValidation(input, regex, isMatched) {
		const warnMsgEl = input.nextElementSibling;
		if (regex.test(input.value)) {
			input.classList.remove("invalid-field");
			warnMsgEl.classList.add("opacity-0");
			warnMsgEl.classList.remove("opacity-100");
		} else {
			input.classList.add("invalid-field");

			warnMsgEl.classList.add("opacity-100");
			warnMsgEl.classList.remove("opacity-0");
			regex.test(input.value)
				? (warnMsgEl.textContent = `Please don't use special characters`)
				: input.value.length < 4
				? (warnMsgEl.textContent = `Please enter at least 4 characters`)
				: (warnMsgEl.textContent = `Please inter a valid ${input.placeholder}`);
		}
		// if (input.value.test(regex)) {
		// 	input.classList.remove("invalid-field");
		// } else {
		// 	input.classList.add("invalid-field");
		// 	const warnMsgEl = input.nextElementSibling;
		// 	warnMsgEl.classList.add("opacity-100");
		// 	warnMsgEl.textContent = `Please enter a valid ${input.placeholder}`;
		// }
	}
}

// Register the custom element
customElements.define("contact-component", ContactComponent);
