import type { Config } from "tailwindcss";
import tailwindcssMotion from "tailwindcss-motion";
const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'Inter'
  			],
  			poppins: [
  				'Poppins'
  			]
  		},
  		colors: {
  			blue: {
  				'100': '#808EC6',
  				'500': '#323B60'
  			},
  			green: {
  				'100': '#64C738',
  				'500': '#308809'
  			},
  			disabled: '#7E7E7E',
  			primary: {
  				blue: '#323B60',
  				black: '#0A0A0A',
  				grey: '#D9D9D9',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'partial-blue': 'linear-gradient(to right, transparent 0%, transparent 70%, #323B60 70%, #323B60 100%)',
  			'partial-blue-left': 'linear-gradient(to right, #323B60 0%, #323B60 70%, transparent 70%, transparent 100%)'
  		},
  		keyframes: {
  			'fade-in': {
  				from: {
  					scale: '0.5',
  					opacity: '0'
  				},
  				to: {
  					scale: '1',
  					opacity: '1'
  				}
  			},
  			'fade-out': {
  				from: {
  					scale: '1',
  					opacity: '1'
  				},
  				to: {
  					scale: '0.5',
  					opacity: '0'
  				}
  			},
  			'slide-in-left': {
  				from: {
  					transform: 'translateX(100%)'
  				},
  				to: {
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-out-left': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(100%)'
  				}
  			},
  			'slide-in-right': {
  				from: {
  					transform: 'translateX(-100%)'
  				},
  				to: {
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-out-right': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in linear forwards',
  			'slide-in-left': 'slide-in-left linear forwards',
  			'slide-out-left': 'slide-out-left linear forwards',
  			'slide-in-right': 'slide-in-right linear forwards',
  			'slide-out-right': 'slide-out-right linear forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssMotion, require("tailwindcss-animate")],
};
export default config;
