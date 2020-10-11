/* eslint-disable import/extensions */
/**
 * @format
 */
import '../global.css'
import './index.css'
import {CreateElement, InsertAfterElement, InsertBeforeElement, Log, QuerySelector}  from "../utils/utils.js";
import  getProductsService  from "../services/products.js"
import loading from '../components/loading/loading.js'
import productCard from '../components/productCard/productCard.js'
import setProductCard from '../components/productCard/productCard.js';

const page = 1
let data = {
  nextPage:"",
  products: []
}

// Eementos da DOM
const divMain = QuerySelector('.main')
const main = QuerySelector('#main')
const section = QuerySelector('#section-products').firstElementChild
const section1 = QuerySelector('#section-products')
const btnGetProducts = QuerySelector('[get-products]')

// Log("SECTION", section)

//InsertAfterElement(section, productCard)
//InsertAfterElement(section, productCard)


// Iniciando Estado do component main com um loader para ter produtos para mostrar
setPage()

// async function setProducts(products){
//   console.log("PRODUTOS", productList)
//   console.log("PRODUTOS", products)
//   return [...productList, productList]
// } 


const getProducts = async (e) => {
  e.preventDefault()
  const response =  await getProductsService(page)
  data = {...response}  
}

Log("ALOOOOO", divMain)
Log("MAIN", main)
Log("MAIN3", main[0])
async function setPage(){
  const response =  await getProductsService(1)
  data = {...response}

  Log("DATAAA", data)
  if(data.products.length === 0){
    Log("ENTROU IF", data.products.length)
    divMain.style.display = 'none'
    loading(true, main)
  }else{
    Log("LENG",data.products.length)
    loading(false, main)
    divMain.style.display ='block'
    // let test =  data.products.map(ele => {
    //   return setProductCard(ele)
    // })
    
  }
}

btnGetProducts.onclick = getProducts

