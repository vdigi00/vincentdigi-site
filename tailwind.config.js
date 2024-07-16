/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        "skills-lg": "calc(25% - (3/4 * 1rem))",
        "skills-md": "calc(33.33% - (2/3 * 1rem))"
      },
      fontFamily: {
        'MADE-TOMMY-Regular': ['"MADE-TOMMY-Regular"', 'sans-serif'],
        'MADE-TOMMY-Medium': ['"MADE-TOMMY-Medium"', 'sans-serif'],
        'MADE-TOMMY-Light': ['"MADE-TOMMY-Light"', 'sans-serif']
      },
    },
  },
  plugins: [],
}