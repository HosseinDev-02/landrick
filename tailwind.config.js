/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--color-primary))',
        'primary-darker': 'rgb(var(--color-primary-darker))',
        'title': 'rgb(var(--color-title))',
        'caption': 'rgb(var(--color-caption))',
        'sub-title': 'rgb(var(--color-sub-title))',
        'body': 'rgb(var(--color-body))',
        'light': 'rgb(var(--color-light))',
        'light-border': 'rgb(var(--color-light-border))',
        'success': 'rgb(var(--color-success))',
        'error': 'rgb(var(--color-error))',
        'footer-bg': 'rgb(var(--color-footer-bg))',
        'light-bg': 'rgb(var(--color-light-bg))',
        'footer': 'rgb(var(--color-footer))',
        'footer-border': 'rgb(var(--color-footer-border))',
        'warning': 'rgb(var(--color-warning))',
      },
      content: {
        'process': 'url("../public/images/process.png")',
        'envelope': 'url("../public/images/envelope (1).svg")'
      },
      fontSize: {
        'xxs': '0.6875rem',
        'xs': '0.8125rem',
        'md': '0.9375rem',
        '5xl': '2.8125rem',
      },
      spacing: {
        '7.5': '1.875rem',
        '10.5': '2.625rem',
        '15.5': '4.0625rem',
        '46': '11.25rem',
      },
      boxShadow: {
        'sm': '0 0 3px 0 rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 3px 5px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 5px 13px 0 rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 25px 0 rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        "IranSansDn": "IranSansDn",
        "IranSansDn-Bold": "IranSansDn Bold",
        "IranSansFaNum": "IranSansFaNum",
        "IranSansFaNum-Bold": "IranSansFaNum Bold",
        "IranSansFaNum-Medium": "IranSansFaNum Medium",
        "Dana": "Dana"
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '50%': {opacity: '0.5'},
          '100%': {opacity: '1'},
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '50%': {opacity: '0.5'},
          '100%': {opacity: '0'},
        },
        spinMd: {
          '0%': {
            transform: 'rotate(-36deg)'
          },
          '100%': {
            transform: 'rotate(-396deg)'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-in',
        spinMd: 'spinMd 4s linear infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
          sm: '2.625rem'
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

