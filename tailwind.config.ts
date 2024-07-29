import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"]
      }
    }
  },

  plugins: [typography()]
} as Config;
