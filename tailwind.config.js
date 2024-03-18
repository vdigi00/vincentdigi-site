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
        'LT-Hoop-Regular': ['"LTHoop-Regular"', 'sans-serif'],
        'LT-Hoop-SemiBold': ['"LTHoop-SemiBold"', 'sans-serif'],
        'LT-Hoop-Bold': ['"LTHoop-Bold"', 'sans-serif'],
        'GreenKingsWood-Regular': ['"GreenKingsWood-Regular"', 'sans-serif'],
        'MADE-TOMMY-Medium': ['"MADE-TOMMY-Medium"', 'sans-serif'],
        'MADE-TOMMY-Regular': ['"MADE-TOMMY-Regular"', 'sans-serif']
      },
    },
  },
  plugins: [],
}