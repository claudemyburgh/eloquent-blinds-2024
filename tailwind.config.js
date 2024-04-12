import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{tsx,ts,js,jsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.cyan,
        tri: colors.rose,
        gray: colors.slate,
      },
      width: {
        "square-diagonal": Math.sqrt(2) * 100 + "%",
      },
      borderRadius: {
        global: ".75rem",
      },
      dropShadow: {
        hard: ["0 3px 3px rgba(0, 0, 0, 0.5)", "0 6px 6px rgba(0, 0, 0, 0.25)"],
      },
      keyframes: {},
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },

  plugins: [forms],
};
