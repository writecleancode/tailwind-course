/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				black20: '#00000033',
			},
		},
	},
	plugins: [],
};
