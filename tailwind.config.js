module.exports = {
     purge: {
      
      content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'higia': '#52A59B',
        'higialight': '#D5FFF7',
        'higiab': '#D1E495',
        'higiaback': '#55d1f8',
        
      },
      fontFamily: {
        'nunito': ['Nunito',  'bold']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
