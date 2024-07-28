/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      padding: {
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      backgroundColor: {
        default: "rgb(250, 108, 28);",
      },
      fontFamily: {
        griffer: "GRIFTER",
      },
      borderColor: {
        heroBorder: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
