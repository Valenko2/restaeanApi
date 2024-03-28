/** @type {import('tailwindcss').Config} */
export default {
  content: ["./resources/**/*.blade.php"],
  theme: {
    extend: {
        spacing: {
            '84': '22rem',
            '100': '30'
        }},
  },
  plugins: [],
}

