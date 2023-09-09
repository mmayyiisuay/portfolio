/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Arial', 'sans'], // Replace 'Arial' with your desired font
      },
    },
  },
  plugins: [],
}