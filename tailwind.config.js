/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				brown: ["Brown", "sans-serif"],
			},
		},
	},
	plugins: [],
};
