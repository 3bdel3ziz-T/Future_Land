async function getThis(dataPath) {
	try {
		const response = await fetch(`${dataPath}`);
		return JSON.parse(await response.text());
	} catch (error) {
		console.error(`Error: ${error}`);
	}
}

export { getThis };
