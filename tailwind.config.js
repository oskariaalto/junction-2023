/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./index.html"],
  theme: {
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

  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest"]  // This enables the full theme
  }
}

