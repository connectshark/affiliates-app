export default defineEventHandler(async (event) => {
  const { link, offerId } = await readBody(event)
  const { API_KEY, API_DOMAIN } = useRuntimeConfig()

  const data = JSON.stringify([
    {
      target_url: link
    }
  ])
  const fetch_response = await fetch(API_DOMAIN + `/api/v1/affiliates/deep_links/generate.json?api_key=${API_KEY}&offer_id=${offerId}&data[]=${data}`, {
    method: 'POST'
  })
  return await fetch_response.json()
})