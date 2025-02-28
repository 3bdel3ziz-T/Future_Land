export default class RatingComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	async connectedCallback() {
		this.shadowRoot.innerHTML = `
		${this.setRating(Number(this.getAttribute("rating")))}
    `;
	}
	setRating(count) {
		const emptyStar = "☆",
			fullStar = "★",
			halfStar = "½";
		const ratingEl = document.createElement("span");
		const rating = `${fullStar.repeat(Math.floor(count))}${halfStar.repeat(
			count % 1 > 0 ? 1 : 0
		)}${emptyStar.repeat(
			5 - Math.round(count) > 0 ? 5 - Math.round(count) : 0
		)}`;
		ratingEl.textContent = rating.slice(0, 5);

		return ratingEl.outerHTML;
	}
}

// Register the custom element
customElements.define("rating-component", RatingComponent);
