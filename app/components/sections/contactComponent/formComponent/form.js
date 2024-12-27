import { getThis } from "../../../../core/getThis.js";
import { injector } from "../../../../core/injector.js";

export default class FormComponent extends HTMLElement {
	formObj = {
		firstName: {
			input: null,
			regex: /^[a-zA-Z]{4,12}$/,
			isValid: false,
		},
		lastName: {
			input: null,
			regex: /^[a-zA-Z]{4,12}$/,
			isValid: false,
		},
		email: {
			input: null,
			regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			isValid: false,
		},
		phone: {
			input: null,
			regex: /^[0-9]{10}$/,
			isValid: false,
		},
	};
	submit;
	styleSheetPath = "./app/styles/output.css";
	templatePath =
		"./app/components/sections/contactComponent/formComponent/form.html";
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="${this.styleSheetPath}">
				${await getThis(this.templatePath)} `;

		const form = Array.from(
			this.shadowRoot.querySelectorAll("form label input")
		);
		[
			this.formObj.firstName.input,
			this.formObj.lastName.input,
			this.formObj.email.input,
			this.formObj.phone.input,
			this.submit,
		] = form;
		for (let key in this.formObj) {
			this.formObj[key].input.addEventListener("input", () => {
				this.checkValidation(this.formObj[key]);
			});
		}
		this.submit.addEventListener("click", (e) => {
			e.preventDefault();
			for (let key in this.formObj) {
				if (!this.formObj[key].isValid) {
					this.checkValidation(this.formObj[key]);
				}
			}
		});
	}

	checkValidation({ input, regex, isValid }) {
		const warnMsgEl = input.nextElementSibling;
		if (regex.test(input.value)) {
			input.classList.remove("invalid-field");
			warnMsgEl.classList.add("opacity-0");
			warnMsgEl.classList.remove("opacity-100");
		} else {
			input.classList.add("invalid-field");

			warnMsgEl.classList.add("opacity-100");
			warnMsgEl.classList.remove("opacity-0");
			if (!regex.test(input.value)) {
				if (input.value.length < 4 && !input.type === "email") {
					warnMsgEl.textContent = "only use letters, at least 4 characters.";
				}
			} else {
				warnMsgEl.textContent = "Please don't use special characters";
			}
			// input.value.length < 4
			// 	? (warnMsgEl.textContent = "only use letters, at least 4 characters.")
			// 	: !regex.test(input.value)
			// 	? (warnMsgEl.textContent = "Please don't use special characters")
			// 	: (warnMsgEl.textContent = `Please provide a valid ${input.name}.`);
		}
	}
}

// Register the custom element
customElements.define("form-component", FormComponent);
