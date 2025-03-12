/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#94a3b8',
        dark: '#0f172a',
        secondaryDark: '#15213B',
        lightDark: {
          100: '#283e71',
          200: '#1c2c50',
          300: '#283e71',
        }
      }
    },
  },
  plugins: [],
}

