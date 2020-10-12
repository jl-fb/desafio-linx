/* eslint-disable import/extensions */
/**
 * @format
 */
import '../global.css'
import './index.css'
import {Log, QuerySelector, SetPoductsToPage}  from "../utils/utils.js";
import  getProductsService  from "../services/products.js"
import Loading from '../components/loading/loading.js'

const page = 1
let data = {
  nextPage:"",
  products: []
}
let formNewsletter = {
  name: "",
  email: "",
  cpf: "",
  gender: false,
}
// Eementos da DOM
const divMain = QuerySelector('.main')
const main = QuerySelector('#main')
const section = QuerySelector('#section-products').firstElementChild
const btnGetProducts = QuerySelector('[get-products]')

// Log("SECTION", section)

//InsertAfterElement(section, productCard)
//InsertAfterElement(section, productCard)


// Iniciando Estado do component main com um loader para ter produtos para mostrar
const setPage = async () => {
  const response =  await getProductsService(1)
  data = {...response}

  Log("DATAAA", data)
  if(data.products.length === 0){
    Log("ENTROU IF", data.products.length)
    divMain.style.display = 'none'
    Loading(true, main)
  }else{
    Log("LENG",data.products.length)
    Loading(false, main)
    divMain.style.display ='block'
    // let test =  data.products.map(ele => {
    //   return setProductCard(ele)
    // })
    SetPoductsToPage(section, data.products)
  }
}

setPage()
// async function setProducts(products){
//   console.log("PRODUTOS", productList)
//   console.log("PRODUTOS", products)
//   return [...productList, productList]
// } 



const getProducts = async (e) => {
  
  e.preventDefault()
  let nextPage = data.nextPage.split('page=')
  const response =  await getProductsService(nextPage[1])
  Log("DATA1888888821", response)
  Log("DATA12", data.producs )

  data = {...data, ...response}
  Log("DATA1888888821", data)
  data = {
    nextPage: response.nextPage,
    products: [...data.products, ...response.products]
  }
  Log("PRODUCSTeeee", data.products)
  SetPoductsToPage(section, data.products)
  Log("DATA12", {...data} )
 }
Log("ALOOOOO", divMain)
Log("MAIN", main)
Log("MAIN3", main[0])



btnGetProducts.onclick = getProducts


