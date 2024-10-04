const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),  // Алиас для папки 'src'
        '@components': path.resolve(__dirname, 'src/components'),  // Алиас для компонентов
        '@views': path.resolve(__dirname, 'src/views'),  // Алиас для страниц
        '@assets': path.resolve(__dirname, 'src/assets'),  // Алиас для ресурсов (картинок, стилей и т.д.)
      }
    }
  }
}
