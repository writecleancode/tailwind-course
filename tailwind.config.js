/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			colors: {
				darkSlateGrey: 'hsl(234, 29%, 20%)',
				charcoalGrey: 'hsl(235, 18%, 26%)',
				grey: 'hsl(231, 7%, 60%)',
				tomato: 'hsl(4, 100%, 67%)',
			},
			backgroundImage: {
				'pink-tomato-gradient': 'linear-gradient(90deg, #fe527a 0%, hsl(4, 100%, 67%) 100%)',
			},
		},
	},
	plugins: [],
};
