/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Poppins']
      }
    },
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          colors: {
            primary: '#2b2520',
            latte: '#f2f2ed',
            bright: 'white',
          }
        }
      },
      themes: [
        {
          // name your theme anything that could be a valid css class name
          // remember what you named your theme because you will use it as a class to enable the theme
          name: 'my-theme',
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: 'blue'
            }
          }
        }
      ]
    })
  ],
}

