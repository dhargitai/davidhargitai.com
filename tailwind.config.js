module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'dh-dark': {
          lighter: '#808080',
          DEFAULT: '#2c2c2c',
          light: '#565656',
        },
        'dh-blue': {
          lighter: '#b9d9ea',
          light: '#72b3d6',
          DEFAULT: '#1481BA',
          dark: '#0c4d70',
        },
        'dh-sky': {
          lighter: '#b8e9f7',
          light: '#70d3ef',
          DEFAULT: '#11B5E4',
          dark: '#0a6d89',
        },
        'dh-yellow': {
          lighter: '#fff0bf',
          light: '#ffe07f',
          DEFAULT: '#FFCC29',
          dark: '#997a19',
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        'webflow-icons': ["webflow-icons"],
      },
      fontSize: {
        '4xl': ['2.25rem', '1.3'],
        '5xl': ['3rem', '1.2'],
        '6xl': ['3.75rem', '1.1'],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: [
              {
                figcaption: {
                  fontStyle: 'italic',
                  marginTop: '-1.5em',
                  textAlign: 'center',
                }
              }
            ],
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
