const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    }
  },
  plugins: [],
}
