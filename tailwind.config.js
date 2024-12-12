/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.{html,js}",
		"./app/components/sections/**/*.{html,js}",
		"./app/components/shared/**/*.{html,js}",
	],
	theme: {
		extend: {
			colors: {
				Dark: "#1E293B",
				Green: "#8DC543",
			},
		},
		fontFamily: {
			alumni: ["Alumni Sans"],
		},
	},
	plugins: [],
};
