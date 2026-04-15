import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'node:path'
import includeHtml from 'vite-plugin-include-html'
import path from 'path';

const preparedStaticHtml = () => {
  return {
    name: 'prepare-static-html',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(/\s*crossorigin(\s*=\s*("|')[^"']*\2)?/g, '').replaceAll('type="module"', 'defer');
    },
  };
};

export default defineConfig({
  base: '',
  plugins: [
    includeHtml(),
    preparedStaticHtml(),
    ViteImageOptimizer({
      cache: true,
      includePublic: true,
      svg: {
        plugins: [
          'preset-default',
          'sortAttrs',
        ],
      },
    }),
  ],
  build: {
    cssMinify: true,
    minify: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalog: resolve(__dirname, 'catalog.html'),
        blog: resolve(__dirname, 'blog.html'),
        detail: resolve(__dirname, 'detail.html'),
        article: resolve(__dirname, 'article.html'),
        lk: resolve(__dirname, 'lk.html'), 
        lkProfile: resolve(__dirname, 'lk-profile.html'), 
      },
      output: {
        assetFileNames: (assetInfo) => {
          let fullPath = assetInfo.originalFileNames[0] || assetInfo.names[0];
          
          const assetsPath = fullPath.split('src' + path.sep + 'assets' + path.sep).pop();
          const filePath = assetsPath.split(path.sep);
          const fileName = filePath.pop();

          if (assetsPath.includes('images')) {
            return `assets/${filePath.join('/')}/${fileName}`;
          }
          if (assetsPath.includes('fonts')) {
            return `assets/fonts/${fileName}`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      }
    },
  }
});