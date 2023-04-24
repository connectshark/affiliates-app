export default defineEventHandler(async () => {
  const { API_KEY, API_DOMAIN } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + `/api/v1/affiliates/stats.json?api_key=${API_KEY}&locale=zh-TW`)
  return await fetch_response.json()
})