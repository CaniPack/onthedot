import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      es: 'en'
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  scopedStyleStrategy: 'where'
}); 