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
	},
	plugins: [],
}
