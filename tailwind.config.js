module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
          red: "#F54E19",
          orange: "#F56819",
          yellow: "#F5C619",
          lime: "#B0F349",
          green: "#6AE367",
        },  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
