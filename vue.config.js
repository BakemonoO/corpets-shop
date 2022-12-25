const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    allowedHosts: "all",
  },
  transpileDependencies: true,
  publicPath: '/bakemonoo/corpets-shop/'
})
