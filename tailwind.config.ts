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
          light: '#c4dafe',
          dark: '#6aa3f5',
        },
        green: {
          DEFAULT: '#06c664',
          dark: '#05a353',
        },
        yellow: '#f5b62f',
        orange: '#e36138',
        pink: '#eea7a8',
        purple: '#521445',
        // Neutrals
        ink: {
          100: '#000000',
          80: '#3e4b50',
          60: '#6e787c',
          40: '#9fa5a7',
          20: '#cfd2d3',
        },
        white: {
          DEFAULT: '#ffffff',
          75: '#f1f1f1',
          100: '#e7e7e7',
        },
        tan: '#f6ede5',
        // Site dark backgrounds
        bg: {
          DEFAULT: '#080e18',
          surface: '#0f1c2e',
          card: '#132035',
          border: '#1e3350',
        },
      },
      fontFamily: {
        sans: ['carbona-variable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'blue-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(153,195,251,0.25) 0%, transparent 60%)',
        'blue-glow-bottom': 'radial-gradient(ellipse 60% 40% at 50% 120%, rgba(153,195,251,0.2) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}

export default config
