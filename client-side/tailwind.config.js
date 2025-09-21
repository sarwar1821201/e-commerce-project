/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React/Vite project er jonno src folder scan korbe
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FF6B6B", // এখানে আপনার secondary color দিন
        primary: "#1C64F2",
        tertiary: "#FACC15",
        primaryDeep:"1b1b1726",
        gray:{
            39:"7b7b7b",
            50:"585858"
        },
        screens:{
            xs:"400px"
        },
        
      },
    },
  },
  plugins: [],
}
