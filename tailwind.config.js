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
				blur_BG: "blurBG 450ms ease-in-out 0s infinite",
				drawSvg: "drawPath 2.5s ease-in 0s 1 forwards",
				undrawHeroSvg: "undrawHeroPath 2s ease-out 0s 1 backwards",
				undrawValuesPath: "undrawValuesPath 2s ease-out 0s 1 backwards",
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
				drawPath: {
					to: { strokeDashoffset: "0%" },
				},
				undrawHeroPath: {
					from: { strokeDashoffset: "0%" },
					to: { strokeDashoffset: "-2791" },
				},
				undrawValuesPath: {
					from: { strokeDashoffset: "0%" },
					to: { strokeDashoffset: "2418" },
				},
				blurBG: {
					"0%,100%": { filter: "blur(2px)" },
					"50%": { filter: "blur(8px)" },
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
		fontFamily: {
			alumni: ["Alumni Sans"],
		},
	},
	plugins: [],
};
