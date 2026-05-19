// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://paneksu.github.io',
  base: '/Wizytowka_Stomatologia_Demo',
  vite: {
    plugins: [tailwindcss()]
  }
});