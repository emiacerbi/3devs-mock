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
        'hero-pattern': "url('/hero.jpeg')",
        churrasco: "url('/churrasco.jpg')",
        caviar1: "url('/caviar1.jpg')",
        caviar2: "url('/caviar2.jpg')",
        sumateBg: "url('/sumate-bg.jpg')"
      }
    }
  },
  plugins: []
}
