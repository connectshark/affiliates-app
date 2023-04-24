<template>
<NuxtLayout>
  <h1>hi</h1>
  <div>
    <NuxtLink to="/state">瀏覽報表</NuxtLink>
  </div>
  <div v-if="loading">loading...</div>
  <ul v-else>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
  <div>
    <PageButton @click="nextPage">Next</PageButton>
  </div>
</NuxtLayout>

</template>

<script setup>

const {
  list,
  loading,
  nextPage
} = useOffer()

</script>