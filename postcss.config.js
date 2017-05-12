module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-cssnext')({
        features: {
          rem: {
              rootValue: '10px',
              replace: false
          }
        },
        warnForDuplicates: false
      }),
      require('postcss-custom-media'),
      require('./build/index.js'), // <-- this plugin!
      /*
      require('cssnano')({
        safe: true
      }),
      */
      require('postcss-reporter')
    ]
}
