/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.{html,js}",
		"./components/sections/**/*.{html,js}",
		"./components/shared/**/*.{html,js}",
	],
	theme: {
		extend: {
			colors: {
				Dark: "#1E293B",
				Green: "#8DC543",
			},
		},
	},
	plugins: [],
};
