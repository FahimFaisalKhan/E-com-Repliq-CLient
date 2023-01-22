module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: "#B7E4C7",
        "tertiary-light": "#D8F3DC",
        "tertiary-dark": "#95D5B2",
        "primary-dark": "#081C15",
        "primary-light": "#2D6A4F",
        "secondary-light": "#74C69D",
        "secondary-dark": "#74C69D",
      },
    },
  },
  daisyui: {
    themes: [
      {
        eCommerce: {
          primary: "#1B4332",

          secondary: "#52B788",
          warning: "#ffea00",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
