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
      backgroundImage: {
        main: "url('/images/mainBg.webp')",
      },
      transitionProperty: {
        "grid-rows": "grid-template-rows",
        padding: "padding",
      },
    },
  },
  plugins: [fluid],
};
export default config;
