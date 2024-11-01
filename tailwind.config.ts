/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: 'var(--font-Inter)',
  			poppins: 'var(--font-Poppins)',
  			orbitron: 'var(--font-Orbitron)'
  		},
  		colors: {
  			primary: 'hsl(var(--color-primary))',
  			secondary: 'hsl(var(--color-secondary))',
  			tertiary: 'hsl(var(--color-tertiary))',
  			palebdanger: 'hsl(var(--color-palebdanger))',
  			light: 'hsl(var(--color-light))',
  			paleblue: 'hsl(var(--color-paleblue))',
  			paledark: 'hsl(var(--color-paledark))',
  			darkred: 'hsl(var(--color-darkred))'
  		},
  		animation: {
  			meteor: 'meteor 5s linear infinite',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
