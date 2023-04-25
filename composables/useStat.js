export default function () {
  const loading = ref(false)
  const data = ref(null)
  const page = ref('1')

  const getStat = async () => {
    loading.value = true
    const fetch_response = await fetch(`/api/stats?page=${page.value}`)
    const response = await fetch_response.json()
    data.value = response.data
    page.value = parseInt(response.page)
    loading.value = false
  }

  const nextPage = async () => {
    page.value++
    await getStat()
  }

  const prevPage = async () => {
    if (page.value > 2) {
      page.value--
      await getStat()
    }
  }

  getStat()

  return {
    loading,
    data,
    nextPage,
    page,
    prevPage
  }
}