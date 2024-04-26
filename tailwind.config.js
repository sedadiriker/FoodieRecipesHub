/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E03136",
        secondaryColor:  "#F79527",
        sectionColor:"#FDF7E7",
        navbarColor: "#D3D1C0",
        navbaricon:"#FFB74A",
        labelColor: "#CC2E38",
        navbarText:  "#FFFFFF",
        green:"#009C3E"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato:["Lato", "sans-serif"],
      },
      fontSize: {
        navlink: "12px",
        title: "1.2rem"
      },
      boxShadow: {
        login: "2px 5px 50px 0px rgba(0, 0, 0, 0.4)",
        modal: "2px 5px 10px 0px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};