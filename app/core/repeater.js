import { getThis } from "./getThis.js";
import { injector } from "./dataInjector.js";

async function repeater(holderEl, dataJsonPath, repeatedItemPath) {
	await getThis(repeatedItemPath)
		.then((itemTemplate) => {
			getThis(dataJsonPath)
				.then((items) => {
					if (holderEl instanceof HTMLElement) {
						let html = "";
						for (let item of JSON.parse(items)) {
							html += injector(itemTemplate, item);
						}
						holderEl.innerHTML = html;
					} else console.error(`holderEl: is not an HTMLElement`);
				})
				.catch((error) => console.error(`dataJsonPath:${error}`));
		})
		.catch((error) => console.error(`itemTemplate:${error}`));
}

export { repeater };
