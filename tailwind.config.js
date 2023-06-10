/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				// 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				// 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				
				blur: 'radial-gradient(circle, rgba(107,33,168,1) 0%, rgba(0,0,0,0.7707457983193278) 100%)',
			},
			fontFamily: {
				sans: 'Roboto, sans-serif',
			},
			colors: {
				green: { 
					300: '#00B37E',
					500: '#00875F',
					700: '#015F43'
				},
				blue: {
					500: '#81D8F7',
				},
				orange: {
					500: '#FBA94C',
				},
				red: {
					500: '#F75A68'
				},
				gray: {
					100: '#E1E1E6',
					200: '#C4C4CC',
					300: '#8D8D99',
					500: '#323238',
					600: '#29292E',
					700: '#121214',
					900: '#09090A'
				}
			}
		},
	},
	plugins: [],
}
