const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/variables.scss";`
      }
    }
  },
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== "production"
      })
    ]
  },
  publicPath: process.env.NODE_ENV === "production" ? "/citypop/" : "/"
};
