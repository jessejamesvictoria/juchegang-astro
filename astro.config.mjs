// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kim.juche.org',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress benign Vite warning from Astro internals about unused remote pattern helpers
          // (imported but not used inside node_modules/astro/dist/assets/utils/remotePattern.js)
          if (
            warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
            warning.id?.includes('remotePattern.js')
          ) {
            return;
          }
          warn(warning);
        }
      }
    }
  }
});