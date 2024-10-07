import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcol: {
          DEFAULT: "#000000",
          "70": "#00000070",
          "50": "#00000050",
        },
        txtcol: {
          DEFAULT: "#fdfeff",
        },
        pricol: {
          DEFAULT: "#58a3ff",
          "70": "#58a3ff70",
          "50": "#58a3ff50",
          "30": "#58a3ff30",
        },
        seccol: {
          DEFAULT: "#13599e",
          "70": "#13599e70",
          "50": "#13599e50",
          "30": "#13599e30",
        },
        bggcol:{
          DEFAULT: "#030712",
          "95": "#03071295",
          "70": "#03071270"
        },
        accol: {
          DEFAULT: "#1987f5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
