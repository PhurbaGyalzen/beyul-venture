const path = require('path')

module.exports = {
  webpack: {
    alias: {
      // add as many aliases as you like!
      components: path.join(__dirname, 'src', 'components'),
      api: path.join(__dirname, 'src', 'api'),
      pages: path.join(__dirname, 'src', 'pages'),
      img: path.join(__dirname, 'src/assets/img'),
      utils: path.join(__dirname, 'src/utils'),
      CustomHooks: path.join(__dirname, 'src/CustomHooks'),
    },
  },
}
