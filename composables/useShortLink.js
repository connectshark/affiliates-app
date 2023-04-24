export default function () {
  const loading = ref(false)
  const link = ref('')

  const generateLink = async ({ realLink, offerId }) => {
    loading.value = true
    const fetch_response = await fetch(`/api/link`, {
      method: 'POST',
      body: JSON.stringify({
        link: realLink,
        offerId: offerId
      })
    })
    const response = await fetch_response.json()
    link.value = response
    loading.value = false
  }

  return {
    loading,
    generateLink
  }
}