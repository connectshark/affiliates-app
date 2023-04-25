<template>
<NuxtLayout>
  <section class=" py-2">
    <h2 class=" text-2xl">本日成績</h2>
    <div class=" text-center" v-if="loading">
      <i class='bx bx-loader-alt bx-spin bx-md' ></i>
    </div>
    <ul v-else class=" grid grid-cols-3 gap-3">
      <li>
        <p class=" text-sm">總點擊次數</p>
        <p class=" text-center text-2xl">{{ data.stat_total.clicks }}</p>
      </li>
      <li>
        <p class=" text-sm">每次點擊所賺取的收入</p>
        <p class=" text-center text-2xl">{{ data.stat_total.epc }}</p>
      </li>
      <li>
        <p class=" text-sm">總產生的目標成立次數</p>
        <p class=" text-center text-2xl">{{ data.stat_total.captured }}</p>
      </li>
      <li>
        <p class=" text-sm">目標成立後已獲得批准的總次數</p>
        <p class=" text-center text-2xl">{{ data.stat_total.conversions }}</p>
      </li>
      <li>
        <p class=" text-sm">目標成立後還在審核中的總次數</p>
        <p class=" text-center text-2xl">{{ data.stat_total.total_pending_conversions }}</p>
      </li>
    </ul>
  </section>
</NuxtLayout>

</template>

<script setup>

const {
  data,
  loading
} = useStat()


</script>