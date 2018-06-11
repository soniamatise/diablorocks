const axios = require("axios");

module.exports = {
  serverMiddleware: ["~/middleware/seo.js"],
  /*
	 ** Headers of the page
	 */
  head: {
    title: "Matise - Not your average Agency",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: "Matise - Not your average Agency"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png"
      }
    ]
  },
  /*
	 ** Customize the progress bar color
	 */
  loading: {
    color: "black"
  },
  plugins: [
    {
      src: "~plugins/swiper.js",
      ssr: false
    },
    {
      src: "~plugins/velocity.js",
      ssr: false
    },
    {
      src: "~plugins/vue-motion.js",
      ssr: false
    },
    {
      src: "~plugins/inview.js",
      ssr: false
    },
    {
      src: '~plugins/gsap.js',
      ssr: false
    }
  ],
  /*
	 ** Build configuration
	 */
  build: {
    postcss: {
      plugins: {
        "postcss-cssnext": {
          browsers: ["last 2 versions", "ie >= 9"],
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
		 ** Run ESLint on save
		 */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options : {
               fix : true
           }
        });
      }
    },
    vendor: ["velocity-animate"]
  },
  generate: {
    routes: function() {
      return axios.get("https://api.matise.nl/wp-json/wp/v2/case").then(res => {
        return res.data.map(item => {
          return "/work/" + item.slug;
        });
      });
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://api.matise.nl/wp-json"
  },
  css: [
    {
      src: "~assets/scss/app.scss",
      lang: "scss"
    },
    {
      src: "swiper/dist/css/swiper.css"
    }
  ],
  modules: [
    // Simple usage
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-52529790-1"
      }
    ]
  ]
};
