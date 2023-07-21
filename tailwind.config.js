/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors: {
        "nav-border": "#EBEAEA",
        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",
        gray: "#4D4A4A",
        "gray-100": "#3d3d4e",
        "black-100": "#252525",
        "primary-purple": "#9747FF",
        "gray-50": "#D9D9D9",
        Ivory: "#fffafa",
        Grass: "#bcccb4",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
      animation: {
        // cursor: "cursor .6s linear infinite alternate",
        // type: "type 5.8s ease-out .8s 1 normal both",
        // "type-reverse": "type 5.8s ease-out 0s infinite alternate-reverse both",
        type: "type 5.7s ease-out .8s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "3%, 6%": { width: "1ch" },
          "9%, 12%": { width: "2ch" },
          "15%, 18%": { width: "3ch" },
          "21%, 24%": { width: "4ch" },
          "27%, 30%": { width: "5ch" },
          "33%, 36%": { width: "6ch" },
          "39%, 42%": { width: "7ch" },
          "45%, 48%": { width: "8ch" },
          "51%, 54%": { width: "9ch" },
          "57%, 60%": { width: "10ch" },
          "63%, 66%": { width: "11ch" },
          "69%, 72%": { width: "12ch" },
          "75%, 78%": { width: "13ch" },
          "81%, 100%": { width: "14ch" },
        },
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
