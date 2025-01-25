/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
			colors: {
				"primary-1a": "#3FCF8D",
				"primary-1b": "#32A571",
				"primary-1c": "#267C55",
				"gray-a": "#373737",
				"gray-b": "#2C2C2C",
				"gray-c": "#212121",
				"gray-d": "#161616",
				"white": "#FFFFFF",
				"white-text": "#E6E6E6",
				"white-borders": "#CCCCCC",
			},
			fontFamily: {
				quicksand: ["Quicksand Variable", "sans-serif"],
			},
		},
	},
	plugins: [],
}
