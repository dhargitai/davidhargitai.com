module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
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
