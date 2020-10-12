import { Log } from '../utils/utils.js'
/**
 *  @format
 */

import BASE_URL from './api.js'

async function getProductsService(page=1) {
  Log('page', page)
  console.log('ALO', page)
  Log("URL ", `${BASE_URL}/products?page=${page}`)
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
