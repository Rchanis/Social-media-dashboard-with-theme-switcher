/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram": "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",

        "toggle": "hsl(230, 22%, 74%)",

        "white": "hsl(0, 0%, 100%)",
        //dark theme
        "very-dark-blue-bg": "hsl(230, 17%, 14%)",
        "very-dark-blue-topbg": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "dark-desaturated-blue-hover": "hsl(228, 28%, 30%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        //light theme
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "light-grayish-blue-hover": "hsl(228, 47%, 94%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",

      }
    },
  },
  plugins: [],
}
