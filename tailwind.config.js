/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "skills-lg": "calc(25% - (3/4 * 1.5rem))",
        "skills-md": "calc(33.33% - (2/3 * 1rem))"
      },
      fontFamily: {
        'LT-Hoop-Bold': ['"LTHoop-Bold"', 'sans-serif'],
        'LT-Hoop-SemiBold': ['"LTHoop-SemiBold"', 'sans-serif'],
        'GreenKingsWood-Regular': ['"GreenKingsWood-Regular"', 'sans-serif'],
        'MADE_TOMMY_Medium': ['"MADE_TOMMY_Medium"', 'sans-serif'],
        'MADE_TOMMY_Regular': ['"MADE_TOMMY_Regular"', 'sans-serif']
      },
    },
  },
  plugins: [],
}