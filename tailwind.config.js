module.exports = {
   purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      sm: {'max': '868px'}
    }
  },
  variants:{
    extend:{
      padding: ['hover'],
      margin: ['hover','group-hover'],
      height: ['hover','group-hover'],
      rotate: ['group-hover'],
      width: ['group-hover'],
      inset: ['hover','group-hover'],
      scale: ['hover','group-hover'],
      alignItems: ['hover', 'focus'],
      backgroundColor: ['active'],
      display: ['group-hover']
    }
  },
  plugins: [],
}
