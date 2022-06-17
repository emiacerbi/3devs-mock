module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Domine', serif",
        secondary: "'Raleway', sans-serif"
      },
      colors: {
        headerBg: 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/hero.jpeg')",
        churrasco: "url('/public/churrasco.jpg')",
        caviar1: "url('/public/caviar1.jpg')",
        caviar2: "url('/public/caviar2.jpg')",
        sumateBg: "url('/public/sumate-bg.jpg')"
      }
    }
  },
  plugins: []
}
