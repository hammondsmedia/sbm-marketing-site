import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // HMM SBM brand colors — cool blues dominant
        blue: {
          DEFAULT: '#99c3fb',
          light: '#dbeafe',
          dark: '#3d7ef0',
          fill: '#4a90e2',
        },
        green: {
          DEFAULT: '#06c664',
          dark: '#05a353',
        },
        yellow: '#f5b62f',
        orange: '#e36138',
        pink: '#eea7a8',
        salmon: '#eca8a8',
        maroon: '#551344',
        purple: '#521445',
        // Neutrals
        ink: {
          100: '#000000',
          80: '#3e4b50',
          60: '#6e787c',
          40: '#6b7280',
          20: '#9ca3af',
        },
        white: {
          DEFAULT: '#ffffff',
          75: '#f1f1f1',
          100: '#e7e7e7',
        },
        tan: '#f6ede5',
        navy: '#1a2b4a',
        // Site backgrounds — light theme
        bg: {
          DEFAULT: '#ffffff',
          surface: '#f0f7ff',
          card: '#ffffff',
          border: '#dbeafe',
        },
      },
      fontFamily: {
        sans: ['carbona-variable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'floatY 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
