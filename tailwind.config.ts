import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		container: {
    			padding: '1rem',
				center:true,
    			screens: {
    				'2xl': '1840px'
    			}
    		},
    		fontSize: {
    			'heading--100': '28px',
    			'heading--200': '22px',
    			'heading--300': '18px',
    			'heading--400': '18px',
    			'heading--500': '20px',
    			'heading--600': '25px',
    			'heading--700': '28px',
    			'heading--800': '12px',
    			'heading--900': '11px',
    			'heading--001': '10px',
    			'heading--002': '13px',
    			'body--100': '16px',
    			'body--200': '15px'
    		},
    		colors: {
    			'primary--100': '#FEAA09',
    			'primary--200': '#343C6A',
    			'primary--300': '#2D60FF',
    			'primary--400': '#F5F7FA',
    			'primary--600': '#FE5C73',
    			'primary--700': '#718EBF',
				'primary--800': "#E6EFF5",
				'primary--900': "#4C49ED",
				'primary--001': "#FFFFFF80",
				'primary--002': "#FFFFFFB2",
				'primary--003': "#FFFFFF",
				'primary--004': "#DCFAF8",
				'primary--005': "#E7EDFF",
				'primary--006': "#FFF5D9",
				'primary--007': "#232323",
				'primary--008': "#41D4A8",
				'primary--009': "#FF4B4A",
				'primary--010': "#16DBCC",
				'primary--011': "#FF82AC",
				'primary--012': "#EDF1F7",
				'primary--013': "#1814F3",
				'primary--014': "#123288",
				
				
				
    			secondery: '#FE5C73',
    			secondary100: "#DFE5EE",
				primary400: '#B1B1B1',
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
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
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
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
