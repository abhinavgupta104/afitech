// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://afitechnologies.co.in',
  // Old WordPress URLs all ended in a trailing slash. Keeping that format means
  // every existing inbound link and ranking survives the migration untouched.
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap({ lastmod: new Date() })],
  image: { responsiveStyles: true },
  compressHTML: true,
});
