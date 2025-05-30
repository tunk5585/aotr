/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: '#F8F6F0',
        cream: '#FFF8DC',
        dusty: '#F5E6D3',
        gold: '#FFD700',
        lightgold: '#FFF2CC',
        celestial: '#E6F2FF',
      },
      fontFamily: {
        elegant: ['Playfair Display', 'Times New Roman', 'serif'],
        divine: ['Cinzel', 'Times New Roman', 'serif'],
        celestial: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 215, 0, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 