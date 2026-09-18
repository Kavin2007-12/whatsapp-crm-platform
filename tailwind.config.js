/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      colors: {
        gradix: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0066FF',
          700: '#0052FF',
          800: '#1d4ed8',
          900: '#1e3a8a',
          950: '#0b193d',
        },
        whatsapp: {
          light: '#25D366',
          DEFAULT: '#25D366',
          teal: '#128C7E',
          dark: '#075E54',
          chatbg: '#EFEAE2',
          bubbleOut: '#E7FFDB',
          bubbleOutDark: '#005C4B',
          bubbleIn: '#FFFFFF',
          bubbleInDark: '#202C33',
          darkBg: '#0B141A',
          darkPanel: '#111B21',
          tickBlue: '#53BDEB',
        },
        slate: {
          850: '#151c2c',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
