/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"League Gothic", sans-serif;'],
        main1: ['"League Spartan", sans-serif'],
        roboto: ['"Roboto", sans-serif'],
      },
      letterSpacing: {
        main1: "0.40rem",
      },
    },
  },
  plugins: [],
};
