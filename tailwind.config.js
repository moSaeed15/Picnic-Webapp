/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2F6A77',
        secondaryColor: '#306A77',
        tertiaryColor: '#4A98AA',
        lightPrimaryColor: '#468695',
        primaryGrey: '#DDDDDD',
        toggleGrey: '#BFBFBF',
        secondaryGrey: '#F9FBFC',
        tertiaryGrey: '#EFEFEF',
        textGrey: '#B4B4B4',
        darkBlue: '#0A1F44',
        borderButton: '#C9C9C9',
        borderTable: '#E0E0E0',
        greyNumber: '#B9B9B9',
        greyInput: '#ADADAD',
        textColor: '#252525',
      },
      fontFamily: {
        Inter: ['Inter'],
        Urbanist: ['Urbanist'],
      },
      boxShadow: {
        custom: '0 6px 10px rgba(0, 0, 0, 0.27)',
      },
    },
  },
  plugins: [],
};
