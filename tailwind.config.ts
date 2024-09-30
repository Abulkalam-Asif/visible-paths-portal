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
      },
      transitionProperty: {
        "grid-rows": "grid-template-rows",
        padding: "padding",
      },
      colors: {
        customRed: "#B22234",  // Add your custom color here
      },
      backdropBlur: {
        custom: "43.70159149169922px",  // Your custom blur value
      },
    },
  },
  plugins: [fluid],
};
export default config;
