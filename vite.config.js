export default {
    base: './',
    server: {
      hmr: {
        overlay: false 
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    },
    features: {
      sync: true,
      autoScale: true
    }
  }