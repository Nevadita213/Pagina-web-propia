import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        mist: "#F7F8FA",
        paper: "#FFFFFF",
        aqua: "#15C8C8",
        coral: "#FF6B5E",
        lime: "#B8E986",
        violet: "#7758D1",
        gold: "#F4C95D",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(21, 200, 200, 0.22)",
        lift: "0 24px 60px rgba(17, 19, 24, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
