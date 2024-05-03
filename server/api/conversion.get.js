export default defineEventHandler(async (event) => {
  const { page, start_at, end_at } = getQuery(event)
  const { API_KEY, API_DOMAIN, API_VERSION } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + `/api/${API_VERSION}/affiliates/affiliate_stats/conversions.json?api_key=${API_KEY}&locale=zh-TW&page=${page}&start_at=${start_at}&end_at=${end_at}`)
  const res = await fetch_response.json()
  return res
})