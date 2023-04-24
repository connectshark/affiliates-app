export default defineEventHandler(async (event) => {
  const { page } = getQuery(event)
  const { API_KEY, API_DOMAIN } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + `/api/v1/affiliates/offers.json?api_key=${API_KEY}&page=${page}`)
  const res =  await fetch_response.json()
  return res
})