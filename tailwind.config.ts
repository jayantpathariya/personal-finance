import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#F8F4F0",
          500: "#98908B",
        },
        grey: {
          100: "#F2F2F2",
          300: "#B3B3B3",
          500: "#696868",
          900: "#201F24",
        },
        green: "#277C78",
        yellow: "#F2CDAC",
        cyan: "#82C9D7",
        navy: "#626070",
        red: "#C94736",
        purple: {
          DEFAULT: "#826CB0",
          light: "#AF81BA",
        },
        turquoise: "#597C7C",
        brown: "#93674F",
        magenta: "#934F6F",
        blue: "#3F82B2",
        "navy-grey": "#97A0AC",
        "army-green": "#7F9161",
        gold: "#7F9161",
        orange: "#BE6C49",
      },
    },
  },
  plugins: [],
} satisfies Config;
