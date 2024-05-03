<template>
<div class="grid grid-cols-[50px_1fr] grid-rows-[50px_1fr] h-screen">
  <aside class="shadow row-span-2">
    <nav>
      <ul class="text-center flex flex-col py-4 h-screen">
        <li>
          <NuxtLink to="/">
            <i class='bx bx-home-alt bx-sm'></i>
          </NuxtLink>
        </li>
        <li class="mt-auto mb-4">
          <NuxtLink to="/offer">
            <i class='bx bx-briefcase bx-sm'></i>
          </NuxtLink>
        </li>
        <li class="mb-4">
          <NuxtLink to="/conversion">
            <i class='bx bx-book-heart bx-sm'></i>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/setting">
            <i class='bx bx-cog bx-sm'></i>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
  <header class="shadow p-2 flex items-center space-x-3">
    <figure>
      <img class="w-4" src="../assets/svg/logo.svg" alt="logo">
    </figure>
    <h2>後台&nbsp;/</h2>
  </header>
  <main class="p-10">
    <slot/>
  </main>
</div>
</template>

<script setup>
</script>