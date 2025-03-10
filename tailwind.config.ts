import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
      colors: {
        blue: {
          100: "#808EC6",
          500: "#323B60",
        },
        green: {
          100: "#64C738",
          500: "#308809",
        },
        disabled: "#7E7E7E",
        primary: {
          blue: "#323B60",
          black: "#0A0A0A",
          grey: "#D9D9D9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "partial-blue":
          "linear-gradient(to right, transparent 0%, transparent 70%, #323B60 70%, #323B60 100%)",
        "partial-blue-left":
          "linear-gradient(to right, #323B60 0%, #323B60 70%, transparent 70%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
