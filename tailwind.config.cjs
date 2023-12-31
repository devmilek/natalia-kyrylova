/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4A625C',
			},
			fontFamily: {
				display: ['Montserrat', 'sans-serif'],
			}
		},
		container: {
			padding: {
			  DEFAULT: '1rem',
			  sm: '2rem',
			  lg: '4rem',
			  xl: '5rem',
			  '2xl': '6rem',
			},
		  },
	},
	plugins: [],
}
