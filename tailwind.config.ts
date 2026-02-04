import type { Config } from "tailwindcss";

const config = {
  // デザインシステムは A→B 同期で src に取り込むため、./src のみでよい（node_modules 参照は不要）
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
