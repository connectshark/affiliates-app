<template>
<NuxtLayout>
  <h1>hi</h1>
  <p>{{ data }}</p>
</NuxtLayout>

</template>

<script setup>

const {
  data
} = useFetch('/api/offers')

</script>