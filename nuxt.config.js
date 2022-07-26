export default {
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  css: ['./index.css'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
