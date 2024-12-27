//! this function injects data into the template with only one lvl of nesting
//? @param {string} template - the template to inject data into as string
//? @param {object} dataObj - the data to inject into the template as an object
function injector(template, dataObj) {
	const dataAsEntries = Object.entries(dataObj);
	const regex = /{{( +)?\w+(.\w+)?( +)?}}/g;
	const templateWithData = template.replace(regex, (match) => {
		const keys = match
			.slice(2, match.length - 2)
			.trim()
			.split(".");
		for (let key in dataAsEntries) {
			if (dataAsEntries[key][0] === keys[0]) {
				if (keys.length === 1) {
					return dataAsEntries[key][1];
				} else {
					const nestedEntries = Object.entries(dataAsEntries[key][1]);
					for (let key in nestedEntries) {
						if (nestedEntries[key][0] === keys[1]) {
							return nestedEntries[key][1];
						}
					}
				}
			}
		}
	});
	return templateWithData;
}

export { injector };
