module.exports = {
  css: [
    '~/static/css/theme/default.css',
    '~/static/css/schema.default.css',
    '~/static/css/rich_media_content.css',
    '~/static/css/app.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'element2.0admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'email=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
 *  Customize router mode
 */
  router: {
    mode: 'hash',// "hash" | "history" | "abstract"
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/element-ui',
    "~/plugins/loaderwindow",
    "~/plugins/ckeditor4"
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // config.externals={
        //   "amap":'AMap'
        // };
        //config.mode = "spa";
        config.devtool = "inline-source-map";
        config.entry.polyfill="eventsource-polyfill";
        /*         config.optimization = {
                  minimize: true,
                  //https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
                  //https://blog.csdn.net/qq_16559905/article/details/79404173
                  splitChunks: {
                    minSize: 0,
                    minChunks: 2,
                    cacheGroups: {
                      commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        reuseExistingChunk: true
                      }
                    }
                  }
                }; */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
}
