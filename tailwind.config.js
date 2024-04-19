/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundImage: {
        'wave': "url('~assets/Asset.png')",
        'excel': 'linear-gradient(30deg, #3A07E1 0%, #A010E0 100%)',
      },
      screens: {
        '3xl': '1728px',
        'xs' : '360px',
        '1xl' :'1440px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // Add other font families here if needed
      },
    },
  },
  plugins: [],
}
