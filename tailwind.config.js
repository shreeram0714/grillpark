module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { 
        gold: '#C59D5F', 
        accent: '#ff7a00',
        'accent-light': '#ff9a1f',
        charcoal: '#0f0f0f',
        'charcoal-mid': '#161616',
        'charcoal-light': '#1c1c1c',
        yellow: { 400: '#ff9a1f' },
        orange: { 400: '#ff9a1f', 500: '#ff7a00', 600: '#e66e00' },
      },
      fontFamily: {
        serif: ['Playfair Display','serif'],
        sans:  ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
};