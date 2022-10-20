const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],

  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/styles.scss";
        `,
      },
    },
  },
});
