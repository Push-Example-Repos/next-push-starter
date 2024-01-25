import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-push": "linear-gradient(225deg, #FF94A6, #8247E5)",
        "gradient-linear": "linear-gradient(to right, #ffcfd7, #bfa8e8)",
      },
    },
  },
  plugins: [],
};
export default config;
