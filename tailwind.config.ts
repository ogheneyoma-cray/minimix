import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fdf4f0',
          100: '#fae4d8',
          200: '#f5c4a8',
          300: '#eda070',
          400: '#e47a41',
          500: '#d95f22',
          600: '#c04818',
          700: '#9e3716',
          800: '#7e2f18',
          900: '#672917',
          950: '#381208',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
