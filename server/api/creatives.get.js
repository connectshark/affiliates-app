export default defineEventHandler(async () => {
  const { API_KEY, API_DOMAIN } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + `/api/v1/affiliates/creatives.json?api_key=${API_KEY}`)
  return await fetch_response.json()
})