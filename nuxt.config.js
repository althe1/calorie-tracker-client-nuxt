export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "calorie-tracker",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/apexchart.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  axios: {
    baseURL: "http://localhost:4000", // set env var API_URL to override baseURL
    credentials: true, // pass cookies with each request
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    redirect: {
      logout: '/login',
    },
    strategies: {
      local: false,
      cookie: {
        user: {
          property: false
        },
        endpoints: {
          login: { url: "/users/login", method: "post" },
          logout: { url: "/users/logout", method: "delete" },
          user: { url: "/users", method: "get" }
        }
      }
    }
  }
};
