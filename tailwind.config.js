/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'LT-Hoop-Bold': ['"LTHoop-Bold"', 'sans-serif'],
        'LT-Hoop-SemiBold': ['"LTHoop-SemiBold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}