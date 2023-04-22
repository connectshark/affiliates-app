<template>
  <header class="bg-primary">
    <div class="container mx-auto p-6 max-w-3xl">
      <h1 class="text-white text-4xl">HELLO {{ config.site.title }}</h1>
    </div>
  </header>
  <main class=" h-96">
    <article class=" w-11/12 mx-auto max-w-3xl">
      <slot/>
    </article>
  </main>
  <footer class=" bg-stone-900">
    <div class="container mx-auto p-6 text-white text-xl max-w-3xl">
      <h2>Author: {{ config.site.author }}</h2>
      <p>Useful Link</p>
      <p>
        <a href="https://github.com/connectshark/nuxt-content-starter" target="_blank" rel="noopener noreferrer">
          <i class='bx bxl-github bx-md'></i>
        </a>
        <a href="https://github.com/connectshark" target="_blank" rel="noopener noreferrer">
          <i class='bx bx-user bx-md'></i>
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()
</script>