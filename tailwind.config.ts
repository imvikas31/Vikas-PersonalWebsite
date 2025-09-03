import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				portfolio: {
					dark: 'hsl(var(--portfolio-dark))',
					darker: 'hsl(var(--portfolio-darker))',
					darkest: 'hsl(var(--portfolio-darkest))',
					primary: 'hsl(var(--portfolio-primary))',
					'primary-glow': 'hsl(var(--portfolio-primary-glow))',
					pink: 'hsl(var(--portfolio-pink))',
					blue: 'hsl(var(--portfolio-blue))',
					'text-primary': 'hsl(var(--portfolio-text-primary))',
					'text-secondary': 'hsl(var(--portfolio-text-secondary))',
					'text-muted': 'hsl(var(--portfolio-text-muted))',
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-card': 'var(--gradient-card)',
			},
			boxShadow: {
				'portfolio': 'var(--shadow-portfolio)',
				'portfolio-lg': 'var(--shadow-portfolio-lg)',
				'portfolio-glow': 'var(--shadow-portfolio-glow)',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'glow': {
					'from': { boxShadow: '0 0 20px hsl(var(--portfolio-primary) / 0.3)' },
					'to': { boxShadow: '0 0 40px hsl(var(--portfolio-primary) / 0.6)' },
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
