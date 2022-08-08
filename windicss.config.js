import { defineConfig } from "windicss/helpers"

export default defineConfig({
  theme: {
    extend: {
      colors: {
        "primary-black": "#151515",
        "primary-white": "#FFFFFF",
      },
      fontFamily: {
        default: ["Source Code Pro", "monospace"],
      },
    },
  },
})
