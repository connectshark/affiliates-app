export default function () {
  const loading = ref(false)
  const list = ref([])
  const page = ref('1')

  const getOffer = async () => {
    loading.value = true
    const fetch_response = await fetch(`/api/offers?page=${page.value}`)
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