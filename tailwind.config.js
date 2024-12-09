/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--color-primary))',
        'primary-darker': 'rgb(var(--color-primary-darker))',
        'title': 'rgb(var(--color-title))',
        'caption': 'rgb(var(--color-caption))',
        'sub-title': 'rgb(var(--color-sub-title))',
      },
      fontSize: {
        'xs': '0.9375rem',
        '5xl': '2.8125rem',
      },
      spacing: {
        '7.5': '1.875rem',
        '15.5': '4.0625rem',
        '46': '11.25rem',
      },
      boxShadow: {
        'btn': '0 3px 5px 0 rgba(47, 85, 212, 0.3)'
      },
      fontFamily: {
        "IranSansDn": "IranSansDn",
        "IranSansDn-Bold": "IranSansDn Bold",
        "IranSansFaNum": "IranSansFaNum",
        "IranSansFaNum-Bold": "IranSansFaNum Bold",
        "IranSansFaNum-Medium": "IranSansFaNum Medium",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
          sm: '1.875rem'
        }
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },

  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
