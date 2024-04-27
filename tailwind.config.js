import defaultTheme from "tailwindcss/defaultTheme"

import colors from "tailwindcss/colors"

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{tsx,ts,js,jsx}",
    "./app/View/Components/**/*.php",
  ],
  safelist: [
    {
      pattern: /(splide|pswp)/,
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.cyan,
        tertiary: colors.yellow,
        gray: colors.slate,
        tylor: {
          primary: "#0093A4",
          secondary: "#464749",
        },
      },
      width: {
        "square-diagonal": Math.sqrt(2) * 100 + "%",
      },
      borderRadius: {
        global: "0.5rem",
      },
      dropShadow: {
        hard: ["0 3px 3px rgba(0, 0, 0, 0.5)", "0 6px 6px rgba(0, 0, 0, 0.25)"],
      },
      animation: {
        "slide-slow": "slide-x 3s ease-in-out infinite",
        slide: "slide-x 2s ease-in-out infinite",
        "slide-fast": "slide-x 1s ease-in-out infinite",
        "slide-out-right": "slide-out 4s ease-in-out",
      },
      keyframes: {
        "slide-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" },
        },
        "slide-out": {
          "0%, 100%": { transform: "translateX(200)" },
          "5%, 95%": { transform: "translateX(0)" },
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },

  plugins: [
    require("@tailwindcss/nesting")("postcss-nesting"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("@designbycode/tailwindcss-mask-image"),
    require("@designbycode/tailwindcss-conic-gradient"),
    require("tailwindcss-attributes"),
    require("@designbycode/tailwindcss-text-shadow"),
    require("@designbycode/tailwindcss-reflection"),
  ],
}
