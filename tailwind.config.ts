import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffddd3",
          200: "#ffbca7",
          300: "#ff9a7a",
          400: "#ff794e",
          500: "#ff5722",
          600: "#cc461b",
          700: "#993414",
          800: "#66230e",
          900: "#331107",
        },
        secondary: {
          100: "#d5d9de",
          200: "#abb3bd",
          300: "#818c9b",
          400: "#57667a",
          500: "#2d4059",
          600: "#243347",
          700: "#1b2635",
          800: "#121a24",
          900: "#090d12",
        },
        light: "#EEEEEE",
        dark: "#222831",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
