module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '400px',
      tablet: '768px',
      laptop: '1120px',
      desktop: '1360px',
    },
    fontWeight: {
      bold: 700,
      black: 900,
    },
    fontSize: {
      xs: ['13px', { lineHeight: '18px' }],
      sm: ['15px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '26.4px' }],
      md: ['18px', { lineHeight: '29.7px' }],
      lg: ['32px', { lineHeight: '44px' }],
      xl: ['64px', { lineHeight: '87px' }],
    },

    extend: {
      colors: {
        body: '#FFFFFF',
        theme: '#389D3C',
        white: '#FFFFFF',
        'frog-nation-gray': '#676C67',
        'frog-nation-black': '#262F27',
        'selected-text': '#389D3C',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
