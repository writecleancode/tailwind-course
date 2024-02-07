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
				black16: '#00000029',
				lightBlack: '#131315',
				darkGrey: '#54545d',
				grey: '#b0b0b0',
				silverGrey: '#bcbcc2',
				lightGrey: '#c4c4c4',
				dirtyWhite: '#fafafa',
				white20: '#ffffff33',
				deepBlue: '#0000ee',
				orange: 'rgb(255, 146, 104)',
			},
			backgroundImage: {
				orangeGradient: 'linear-gradient(180deg, rgb(255, 146, 104) 0%, rgb(249, 92, 31) 100%);',
			},
		},
		container: {
			center: true,
			padding: '0.5rem',
		},
		screens: {
			sm: '576px',
			md: '810px',
			lg: '1024px',
			xl: '1200px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
