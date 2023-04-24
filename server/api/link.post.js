export default defineEventHandler(async (event) => {
  const { link, offerId } = await readBody(event)
  const { API_KEY, API_DOMAIN } = useRuntimeConfig()

  const data = [
    {
      target_url: link,
      aff_uniq_id: "mytracking",
    }
  ]

  const fetch_response = await fetch(API_DOMAIN + `/api/v1/affiliates/deep_links/generate.json`, {
    method: 'POST',
    body: JSON.stringify({
      api_key: API_KEY,
      offer_id: offerId,
      data: data
    })
  })
  return await fetch_response.json()
})