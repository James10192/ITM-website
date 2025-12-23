import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-amaranth)',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-changa-one)',
  				'sans-serif'
  			],
  			hero: [
  				'var(--font-orbitron)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			hero: [
  				'64px',
  				{
  					lineHeight: '1.1',
  					fontWeight: '700'
  				}
  			],
  			'hero-mobile': [
  				'40px',
  				{
  					lineHeight: '1.1',
  					fontWeight: '700'
  				}
  			],
  			section: [
  				'48px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			'section-mobile': [
  				'32px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			subsection: [
  				'32px',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			'subsection-mobile': [
  				'24px',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			h4: [
  				'24px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			'h4-mobile': [
  				'20px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			body: [
  				'18px',
  				{
  					lineHeight: '1.6',
  					fontWeight: '400'
  				}
  			],
  			'body-mobile': [
  				'16px',
  				{
  					lineHeight: '1.6',
  					fontWeight: '400'
  				}
  			],
  			small: [
  				'14px',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			]
  		},
  		colors: {
  			primary: {
  				'700': '#3F3F3F',
  				'800': '#2C2C2C',
  				'900': '#1A1A1A'
  			},
  			secondary: {
  				'500': '#6B7280',
  				'600': '#52565E'
  			},
  			accent: {
  				'500': '#B87333'
  			},
  			white: '#FFFFFF',
  			'off-white': '#F9FAFB',
  			grey: {
  				'100': '#F3F4F6',
  				'200': '#E5E7EB',
  				'900': '#111827'
  			},
  			success: '#10B981',
  			error: '#EF4444',
  			warning: '#F59E0B'
  		},
  		spacing: {
  			xs: '8px',
  			sm: '16px',
  			md: '24px',
  			lg: '32px',
  			xl: '48px',
  			'2xl': '64px',
  			'3xl': '96px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			spotlight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			spotlight: 'spotlight 2s ease .75s 1 forwards'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
