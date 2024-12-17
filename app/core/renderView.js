async function renderView(templatePath) {
	try {
		const response = await fetch(`${templatePath}`);
		return await response.text();
	} catch (error) {
		console.error(`Error: ${error}`);
	}
}

export { renderView };
