/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primero: "#1f2937",
				fondo: "#f2f5fc",
				dark: "#07090c",
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
