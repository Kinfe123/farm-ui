import defaultTheme from "tailwindcss/defaultTheme"


module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./package/**/*.{js,ts,jsx,tsx}",
    "./previewsComponents/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
    "./viewport/**/*.{js,ts,jsx,tsx}",
    "./componentsDB/**/*.md",
  ],
  theme: {
    
    extend: {
     
      fontFamily: {
        displayAlt: ["var(--font-display)"],
        display: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
      }, 
    },
  },
  
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
