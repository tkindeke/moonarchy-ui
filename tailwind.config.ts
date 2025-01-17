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
        midnightPurple: "#200C3E",
        royalViolet: "#381968",
        amethyst: "#974DD8",
        frostedMist: "#9CABC240",
        steelGrayLight: "#3C3C435C",
        lavenderMist: "#D29EFF",
        darkAmethyst: "#200C3E",
        neonPink: "#E61791",
      },
      fontFamily: {
        inriaSans: ["Inria Sans"],
      },
      boxShadow: {
        "custom-blue": "0 0 28px 6px #1E5EF0",
      },
    },
  },
  plugins: [],
} satisfies Config;
