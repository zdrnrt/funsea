import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'node:path'
import includeHtml from 'vite-plugin-include-html'

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
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalog: resolve(__dirname, 'catalog.html'),
        blog: resolve(__dirname, 'blog.html'),
        detail: resolve(__dirname, 'detail.html'),
        article: resolve(__dirname, 'article.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|webp|avif/i.test(extType)) {
            return `assets/img/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|otf|eot/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      }
    },
  }
});