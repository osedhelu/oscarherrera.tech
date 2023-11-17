/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textShadow: {
				'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
				'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
			},
			colors: {
				primary: {
					50: '#f2f6ee',
					100: '#e1ead7',
					200: '#ced7b2',
					300: '#c1c186',
					400: '#af9f64',
					500: '#9d7d53',
					600: '#875b45',
					700: '#6e3e3a',
					800: '#5e363b',
					900: '#52323e',
					950: '#2e1a25',
				},
			}
		},
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		}
	},
	variants: {
		extend: {
			textShadow: ['responsive', 'hover', 'focus'],
		}
	},
	plugins: [],
}
