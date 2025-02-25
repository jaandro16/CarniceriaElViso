import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@rollup/rollup']    
    }
  },
  // Add your domain here
   site: 'https://lexingtonthemes.com',
  integrations: [ sitemap()]
});