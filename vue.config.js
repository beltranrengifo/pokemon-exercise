module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_animations.scss";
        `
      }
    }
  }
}
