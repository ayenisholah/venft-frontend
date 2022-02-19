module.exports = {
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
    },
    fontSize: {
      xs: ['13px', { lineHeight: '18px' }],
      sm: [
        '15px',
        {
          lineHeight: '20px',
        },
      ],
    },

    extend: {
      colors: {
        body: '#FFFFFF',
        theme: '#389D3C',
        white: '#FFFFFF',
        'frog-nation-gray': '#676C67',
        'selected-text': '#389D3C',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
