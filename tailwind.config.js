/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.{html,js}",
		"./app/components/sections/**/*.{html,js}",
		"./app/components/shared/**/*.{html,js}",
	],
	theme: {
		extend: {
			animation: {
				invalid_field: "invalid 450ms ease-in-out 0s 1",
			},
			keyframes: {
				invalid: {
					"0%": { transform: "translateX(0px)" },
					"30%": { transform: "translateX(3px)" },
					"60%": { transform: "translateX(-3px)" },
					"70%": { transform: "translateX(3px)" },
					"80%": { transform: "translateX(-3px)" },
					"100%": { transform: "translateX(0px)" },
				},
			},
			screens: {
				xs: "530px",
				sm: "600px",
			},
			colors: {
				Dark: "#1E293B",
				Green: "#8DC543",
				Sky: "#F0F5FA",
			},
		},
		// fontFamily: {
		// 	alumni: ["Alumni Sans"],
		// },
	},
	plugins: [],
};
