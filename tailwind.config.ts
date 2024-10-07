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
      },
      backgroundImage: {
        main: "url('/images/mainBg.webp')",
        survey: "url('/images/surveyBg.webp')",
        surveyResult: "url('/images/surveyResultBg.webp')",
        loanLease: "url('/images/financeloan.webp')",
      },
      transitionProperty: {
        "grid-rows": "grid-template-rows",
        padding: "padding",
      },
      colors: {
        customRed: "#B22234",  // Add your custom color here
      },
      backdropBlur: {
        financeForm: "10px",  // Your custom blur value
      },
    },
  },
  plugins: [fluid],
  corePlugins: {
    backdropFilter: true,
  }
};
export default config;
