export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    API_KEY: import.meta.env.API_KEY,
    API_DOMAIN: import.meta.env.API_DOMAIN,
    API_VERSION: import.meta.env.API_VERSION
  },
  app: {
    rootId: 'app',
    head: {
      title: 'Affiliates',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nosegates.jpg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Ubuntu:wght@400;500;700&display=swap' }
      ]
    }
  },
  tailwindcss: {
    viewer: false,
  }
})
