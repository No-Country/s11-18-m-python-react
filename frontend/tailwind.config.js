/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Turquesa
        "Turqusa/100" : "#031818",
        "Turqusa/200" : "#1c3131",
        "Turquesa/300" : "#386161",
        "Turquesa/400" : "#539292",
        "Turquesa/500" : "#6fc2c2",
        "Turquesa/600" : "#8bf3f3",
        "Turquesa/700" : "#b9f8f8",
        "Turquesa/800" : "#b9f8f8",
        "Turquesa/900" : "#d1fafa",
        "Turquesa/1000" : "#e8fdfd",
        // Grises

        "Negro" : "#000606",
        "Blanco" : "#FCFCFC",
        "Grises/100" : "#535353",
        "Grises/200" : "#a5a5a5",
        "Grises/300" : "#D8D8D8"
       }
    },
  },
  plugins: [],
}
