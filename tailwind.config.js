/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          Poppins: ["Jakarta", "sans-serif"],
          PoppinsBold: ["Poppins-Bold", "sans-serif"],
          PoppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
          PoppinsExtraLight: ["Poppins-ExtraLight", "sans-serif"],
          PoppinsLight: ["Poppins-Light", "sans-serif"],
          PoppinsMedium: ["Poppins-Medium", "sans-serif"],
          PoppinsSemiBold: ["Jakarta-SemiBold", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
