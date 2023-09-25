import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    textColor: {
      base: 'var(--color-base)',
    },
  },
  shortcuts: {
    'border-t': 'border-solid',
  },
});
