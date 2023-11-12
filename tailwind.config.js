/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./index.html"],
  /*theme: {
    extend: {
      colors: {
        primary: "#1eb854",
        secondary: "#1db990",
        accent: "#1db9ac",
        neutral: "#18342b",
        base100: "#171212",
        info: "#3abff8",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#f87272"
    },
    }

  },*/
  plugins: [daisyui],
  //daisyui: {
  //  themes: ["forest"]  // This enables the full theme
  //}
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4CAF50",

          "secondary": "#1E272E",

          "accent": "#FF6F61",

          "neutral": "#F9F9F9",

          "base-100": "#D2E8D8",

          "info": "#cae2e8",

          "success": "#dff2a1",

          "warning": "#f7e488",

          "error": "#f2b6b5",
        },
      },
    ],
  },

}

