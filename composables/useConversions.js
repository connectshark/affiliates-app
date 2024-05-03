export default function () {
  const loading = ref(false)
  const list = ref([])
  const page = ref(1)
  const DAY = 86400000 * 7
  
  const day7 = new Date(Date.now() - DAY)
  const nowDay = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  const start_at = `${new Date(day7).getFullYear()}-${new Date(day7).getMonth() + 1}-${new Date(day7).getDate()}`


  const getOffer = async () => {
    loading.value = true
    const fetch_response = await fetch(`/api/conversion?page=${page.value}&start_at=${start_at}&end_at=${nowDay}`)
    const response = await fetch_response.json()
    list.value = response.data.offers
    page.value = parseInt(response.page)
    loading.value = false
  }

  const nextPage = async () => {
    page.value++
    await getOffer()
  }

  const prevPage = async () => {
    if (page.value > 2) {
      page.value--
      await getOffer()
    }
  }

  onBeforeMount(getOffer)

  return {
    list,
    loading,
    nextPage,
    page,
    prevPage
  }
}