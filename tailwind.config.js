/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#B16AF9",
        muted: "#E9E9E9",
        mutedpro: "#D3D3D3"
      }
    },
  },
  plugins: [],
}

