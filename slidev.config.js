export default {
  // Basic configuration
  title: 'RAG Evaluation Presentation',
  
  // Build configuration for Vercel
  build: {
    base: './',
    outDir: 'dist'
  },
  
  // Ensure assets are properly handled
  vite: {
    base: './',
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  }
}