<template>
  <header class="bg-primary">
    <div class="container mx-auto w-11/12 pt-6 max-w-4xl">
      <h1>
        <NuxtLink class="text-white text-2xl" to="/">{{ config.site.title }}</NuxtLink>
      </h1>
      <nav>
        <ul class=" flex justify-end text-right space-x-4">
          <li v-for="nav in navList">
            <NuxtLink class="block p-1 rounded-t-xl" active-class="bg-white text-black" :to="nav.link">{{ nav.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main class=" min-h-screen">
    <div class="w-11/12 mx-auto max-w-4xl">
      <slot/>
    </div>
  </main>
  <footer class=" bg-stone-100 text-black">
    <div class="mx-auto w-11/12 py-10 max-w-4xl grid gap-8">
      <div>
        <h3>
          <NuxtLink to="/">2023<i class="bx bx-copyright"></i>{{ config.site.title }}</NuxtLink>
        </h3>
      </div>
      <div>
        <ul>
          <li v-for="nav in navList">
            <NuxtLink class="hover:underline" :to="nav.link">{{ nav.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p>
          <a href="https://github.com/connectshark/nuxt-content-starter" target="_blank" rel="noopener noreferrer">
            <i class='bx bxl-github bx-sm'></i>
          </a>
          <a href="https://github.com/connectshark" target="_blank" rel="noopener noreferrer">
            <i class='bx bx-user bx-sm'></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()

const navList = [
  {
    name: '品牌列表',
    link: '/offer'
  },
  {
    name: '報表',
    link: '/stat'
  }
]
</script>