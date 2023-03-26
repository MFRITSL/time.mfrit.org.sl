module.exports = {
    content: [
    ],
    theme: {
      screens: {
        // Small devices (landscape phones, 576px and up)
        'sm': '576px',
  
        // Small devices (PORTRAIT phones, 576px and up)
        'smportrait': {
          raw: '(min-height: 668px ) and (max-height: 845x)'
        },
      
        // Medium devices (tablets, 768px and up)
        'md': '768px',
        
      // Large devices (desktops, 992px and up)
        'lg': '992px',
        
      // X-Large devices (large desktops, 1200px and up)
        'xl': '1200px',
        
      // XX-Large devices (larger desktops, 1400px and up)
        'xxl': '1400',
      
        // XXX-Large devices (larger desktops, 2560px and up)
        'xxxl': '2560'
      },
      container: {
        center: true,
        padding: '5px',
        width: {
          DEFAULT: '80%',
          sm: '100%',
          smportrait: '100%',
          md: '70%',
          lg: '65%',
          xl: '70%'
        }
      },
      extend: {}
    },
    plugins: []
  }
  