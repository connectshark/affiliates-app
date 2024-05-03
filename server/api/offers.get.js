export default defineEventHandler(async (event) => {
  const { page } = getQuery(event)
  const { API_KEY, API_DOMAIN, API_VERSION } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + `/api/${API_VERSION}/affiliates/offers.json?api_key=${API_KEY}&page=${page}`)
  const res =  await fetch_response.json()
  return res
})