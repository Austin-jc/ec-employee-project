import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "dark-primary": {
          100: "#dcd6ee",
          200: "#b8addd",
          300: "#9583cc",
          400: "#715abb",
          500: "#4e31aa",
          600: "#3e2788",
          700: "#2f1d66",
          800: "#1f1444",
          900: "#100a22",
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
        light: {
          100: "#fcfcfc",
          200: "#f8f8f8",
          300: "#f5f5f5",
          400: "#f1f1f1",
          500: "#eeeeee",
          600: "#bebebe",
          700: "#8f8f8f",
          800: "#5f5f5f",
          900: "#303030",
        },
        dark: {
          100: "#d3d4d6",
          200: "#a7a9ad",
          300: "#7a7e83",
          400: "#4e535a",
          500: "#222831",
          600: "#1b2027",
          700: "#14181d",
          800: "#0e1014",
          900: "#07080a",
        },
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
