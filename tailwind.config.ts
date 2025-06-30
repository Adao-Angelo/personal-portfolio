import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E3646E",
        purple: "#BB72E9",
        blue: "#3996DB",
        green: "#82BC4F",
        yellow: "#EABD5F",
        gray: {
          100: "#E2E4E9",
          200: "#C0C4CE",
          300: "#878EA1",
          400: "#292C34",
          500: "#16181D",
          600: "#0D0E11",
        },
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        maven: ["Maven-pro", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },
      fontSize: {
        "title-lg": ["5.6rem", { lineHeight: "120%", fontWeight: "700" }],
        "title-md": ["2.4rem", { lineHeight: "120%", fontWeight: "700" }],
        "title-sm": ["1.6rem", { lineHeight: "120%", fontWeight: "700" }],

        subtitle: ["2rem", { lineHeight: "120%", fontWeight: "400" }],

        "text-md": ["1.6rem", { lineHeight: "140%", fontWeight: "400" }],
        "text-sm": ["1.4rem", { lineHeight: "140%", fontWeight: "400" }],
      },
      lineHeight: {
        base: "2rem",
      },
      boxShadow: {
        "custom-light": "0px 0px 150px 0px #D4D4D4",
        "custom-dark": "0px 0px 150px 0px #404040",
      },
    },
  },
  plugins: [],
} satisfies Config;
