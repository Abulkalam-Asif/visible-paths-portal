import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      screens: {
        xs: "25rem",
        "2xl": "120rem",
      },
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        main: "url('/images/mainBg.webp')",
        survey: "url('/images/surveyBg.webp')",
        surveyResult: "url('/images/surveyResultBg.webp')",
        loanLease: "url('/images/financeloan.webp')",
        carSelection: "url('/images/carSelectionBg.webp')",
      },
      transitionProperty: {
        "grid-rows": "grid-template-rows",
        padding: "padding",
      },
      colors: {
        customRed: "#B22234",
      },
      backdropBlur: {
        financeForm: "10px",
        surveyForm: "35px",
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.625rem",
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [fluid],
  corePlugins: {
    backdropFilter: true,
  },
};
export default config;
