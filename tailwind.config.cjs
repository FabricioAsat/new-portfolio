/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkLight: "#16191b",
				darkDark: "#07090c",
				lightDark: "#dcdcdc",
				lightLight: "#f9f8fd",
			},

			keyframes: {
				scaleAnimation: {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" },
				},
				opacityAnimation: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},

			animation: {
				scaleAnimation: "scaleAnimation 1750ms ease-in-out infinite",
				opacityAnimation: "opacityAnimation 300ms linear forwards",
			},
		},

		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
			body: ["Nunito", "sans-serif"],
		},
	},
	plugins: [],
};
