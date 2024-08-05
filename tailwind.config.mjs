/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-yellow": "#c29296"
			},
			fontFamily: {
				"main": ['Main', 'sans-serif'],
				"aux": ['Aux', 'sans-serif']
			},
			backgroundImage: {
				"gift": "url('/images/gift.jpg')"
			},
		},
	},
	plugins: [],
}
