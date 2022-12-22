/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      "100%": "100% 100%",
      "150%": "150% 100%",
    },
    extend: {
      backgroundImage: {
        box: "url(/public/assets/image/bg.jpg)",
        index: "url(/public/assets/image/bg-index.jpg)",
      },
      rotate: {
        270: "270deg",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "50%": {
            transform: "rotate(0eg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        shake: "shake 0.5s infinite",
      },
    },
  },
  plugins: [],
};
