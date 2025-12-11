/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2e6b78",
        accent: "#dff7fb",
        softBlue: "#e6f9fc",
        cardBg: "#f3fcff",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(2,30,45,0.15)',
      }
    },
  },
  plugins: [],
}

