/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.{html,js}",
		"./app/components/sections/**/*.{html,js}",
		"./app/components/shared/**/*.{html,js}",
	],
	theme: {
		extend: {
			screens: {
				sm: "600px",
			},
			colors: {
				Dark: "#1E293B",
				Green: "#8DC543",
				Sky: "#F0F5FA",
			},
		},
		fontFamily: {
			alumni: ["Alumni Sans"],
		},
	},
	plugins: [],
};
