import { getThis } from "./getThis.js";
import { renderView } from "./renderView.js";
import { injector } from "./dataInjector.js";

async function repeater(
	holderEl,
	dataJsonPath,
	repeatedItemPath
) {
	const itemTemplate = await renderView(repeatedItemPath);
	getThis(dataJsonPath).then((items) => {
		for (let item of items) {
			holderEl.innerHTML += injector(itemTemplate, item);
		}
	});
}

export { repeater };
