export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    API_KEY: import.meta.env.API_KEY,
    API_DOMAIN: import.meta.env.API_DOMAIN
  },
  app: {
    head: {
      title: 'Nuxt Content Starter',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nosegates.jpg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Poppins&display=swap' }
      ]
    }
  },
  content: {
    defaultLocale: 'zh-TW'
  },
  tailwindcss: {
    viewer: false,
  }
})
