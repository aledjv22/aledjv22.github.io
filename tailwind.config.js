/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'navbar': ['Merriweather', 'serif'],
        'presentation': ['Anton', 'sans-serif'],
        'text': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

