/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        clv_comp: ["clv_comp"],
        clv_cond: ["clv_cond"],
      },
      colors: {
        primary: "#070F2B",
        secondary: "#9290C3",
        ourwhite: "#EEEEEE",
      },
      fontSize: {},
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".282em",
      },
    },
  },
  plugins: [],
};
