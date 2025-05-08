/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // move metade porque duplicamos a lista
        },
      },
      animation: {
        carousel: 'carousel 10s linear infinite',
      },
    },
  },
  plugins: [],
}
