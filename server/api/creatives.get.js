export default defineEventHandler(async () => {
  const { API_KEY, API_DOMAIN, API_VERSION } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + `/api/${API_VERSION}/affiliates/creatives.json?api_key=${API_KEY}`)
  return await fetch_response.json()
})