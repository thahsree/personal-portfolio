/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      coppergold: " #dac5a726",
      mainBg: "#dac5a",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      secondary: "#ffed4a",
      danger: "#e3342f",
      navBg: "#dac5a788",
      normalBg: "#dac5a70d",
      mainBg: "#0e0e0",
      coppergold: "#47403626",
      coppergold2: "#47403640",
    }),
    extend: {
      fontFamily: {
        baloo: ['"Baloo Paaji 2"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        monospace: ["monospace"],
        montserrat: ["Montserrat"],
        poppins: ["poppins"],
        suse: ["SUSE"],
        nunito: ["nunito"],
      },
      colors: {
        textColor: "#dac5a7",
        headingColor: "#d5c8b6",
        coppergold: "#dac5a726",
        coppergold2: "#9b8d76",
      },
      boxShadow: {
        "3xl": "55px 0px 50px 10px rgb(14, 14, 14)",
        "4xl": "0px 0px 50px 70px rgb(14, 14, 14)",
      },
      keyframes: {
        slide: {
          to: { transform: "translateX(-50%)" },
        },
        slideFooter: {
          to: { transform: "translateX(-50%)" },
        },
        rotate: {
          from: { transform: "rotate(55deg)" },
          to: { transform: "rotate(0deg)" },
        },
        rotateArrow: {
          from: { transform: "rotate(250deg)" },
          to: { transform: "rotate(220deg)" },
        },
      },
      animation: {
        slide: "25s slide infinite linear",
        slideFooter: "25s slideFooter infinite linear",
        rotate: ".5s rotate ease-in-out",
        rotateArrow: ".3s rotateArrow ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {
      // ...
      borderColor: ["active"],
    },
  },
  plugins: [],
  corePlugins: {},
};
