module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
        sumateBg: "url('/sumate-bg.jpg')",
        churrasco2: "url('/churrasco2.jpg')",
        merluza: "url('/merluza.jpg')",
        pasta: "url('/pasta.jpg)",
        pizza: "url('/pizza.jpg')",
        sandwich: "url('/sandwich.jpg')",
        postre1: "url('/postre1.jpg')"
      },
      boxShadow: {
        tincho:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
      }
    }
  },
  plugins: []
}
