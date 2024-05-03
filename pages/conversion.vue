<template>
  <NuxtLayout>
    <div>conversion</div>
  </NuxtLayout>
</template>

<script setup>

const {
  loading,
  list
} = useConversions()
</script>