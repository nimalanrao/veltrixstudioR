/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1D3045',
      },
      fontFamily: {
        sans: ['"Google Sans"', '"Plus Jakarta Sans"', '"Open Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionTimingFunction: {
        'cinema-stagger': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinema-overlay': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
