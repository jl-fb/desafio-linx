/**
 *  @format
 */

import BASE_URL from './api.js'

async function getProductsService(page) {
  console.log('ALO', page)
  const resp = await fetch(`${BASE_URL}/products?page=${page}`)
  if (resp.ok) {
    console.log(resp)
    const data = await resp.json()
    console.log(data)
    return data
  }
  throw new Error('Something went wrong')
}

export default getProductsService
