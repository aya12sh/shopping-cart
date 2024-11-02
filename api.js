export const productsDataFetcher = async (params) => {
  let data = await fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => data)
  .catch((e) => console.error(e))
  .finally(()=> console.log("almost done"))

  return data
}