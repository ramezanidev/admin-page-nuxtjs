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
    screens:{
      sm: {'max': '868px'}
    },
    fontFamily: {
      iran: ['IRANSans']
    }
  },
  variants:{
    extend:{
      padding: ['hover'],
      margin: ['hover','group-hover'],
      height: ['hover','group-hover'],
      rotate: ['group-hover'],
      opacity: ['checked'],
      width: ['group-hover'],
      inset: ['hover','group-hover'],
      scale: ['hover','group-hover'],
      alignItems: ['hover', 'focus'],
      backgroundColor: ['active'],
      display: ['group-hover']
    }
  },
}
