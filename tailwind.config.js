/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'security': "url('../src/assets/img/security.svg')",
        'cctv': "url('../src/assets/img/our_services.svg')",
        'card': "url('../src/assets/img/card_placeholder.svg')",
        'cctv2': "url('../src/assets/img/cctv.svg')"
      }
    },
  },
  plugins: [],
}

