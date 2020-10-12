/* eslint-disable import/extensions */
/**
 * @format
 */
import '../global.css'
import './index.css'
import {IsValidCPF, IsValidEmail, Log, QuerySelector, SetPoductsToPage, HideElement, SetPoductsToPageAppend}  from "../utils/utils.js";
import  getProductsService  from "../services/products.js"
import Loading from '../components/loading/loading.js'

let data = {
  nextPage:"",
  products: []
}

let formNewsletter = {
  name: "",
  email: "",
  cpf: "",
  gender: "",
}

let formInvite = {
  name: "",
  email: "",
}
// Eementos da DOM
const divMain = QuerySelector('.main')
const main = QuerySelector('#main')
const section = QuerySelector('#section-products')
const btnGetProducts = QuerySelector('[get-products]')

// Iniciando Estado do component main com um loader para ter produtos para mostrar
const setPage = async () => {
  const response =  await getProductsService(1)
  data = {...response}

  if(data.products.length === 0){
    divMain.style.display = 'none'
    Loading(true, main)
  }else{
    Loading(false, main)
    divMain.style.display ='block'
    // let test =  data.products.map(ele => {
    //   return setProductCard(ele)
    // })
    SetPoductsToPageAppend(section, data.products)
  }
}

setPage()



const getProducts = async (e) => {
  
  e.preventDefault()
  let nextPage = data.nextPage.split('page=')
  const response =  await getProductsService(nextPage[1])

  data = {...data, ...response}
  data = {
    nextPage: response.nextPage,
    products: [...data.products, ...response.products]
  }
  SetPoductsToPage(section, data.products)

 }

const btnNewsLetter = QuerySelector('[formDataNewsletter]')
const btnInvite = QuerySelector('[formDataInvite]')
function formNewsletterSubmit(e) {
  e.preventDefault()
  formNewsletter.name = QuerySelector('#name').value
  formNewsletter.email = QuerySelector('#email').value
  formNewsletter.cpf = QuerySelector('#cpf').value
  const gender = document.getElementsByName('gender')
  for(let i=0; i < gender.length; i++){
    if(gender[i].checked === true){
      formNewsletter.gender = gender[i].value
    }
  }
  
  if(formNewsletter.name.length < 3){
    const isValid = QuerySelector('.form__isValid-name')
    isValid.style.display = 'block'
  }


  if(!IsValidEmail(formNewsletter.email)){
    const isValid = QuerySelector('.form__isValid-email')
    isValid.style.display = 'block'
  }
  
  if(!IsValidCPF(formNewsletter.cpf)){
    const isValid = QuerySelector('.form__isValid-cpf')
    isValid.style.display = 'block'
  }
  setTimeout(() => {
    HideElement(QuerySelector('.form__isValid-cpf'), QuerySelector('.form__isValid-email'), QuerySelector('.form__isValid-name'))
  }, 5000);

}

function formInviteSubmit(e){
  e.preventDefault()
  formInvite.name = QuerySelector('#nameInvite').value
  formInvite.email = QuerySelector('#emailInvite').value
 Log('MMOMOMOMOMOMO', formInvite)
  if(!IsValidEmail(formInvite.email)){
    const isValid = QuerySelector('.form__isValid-email-invite')
    isValid.style.display = 'block'
  }
   if(formInvite.name.length < 3){
    const isValid = QuerySelector('.form__isValid-name-invite')
    isValid.style.display = 'block'
  }
  setTimeout(() => {
    HideElement(QuerySelector('.form__isValid-email-invite'), QuerySelector('.form__isValid-name-invite'))
  }, 5000)
}

btnNewsLetter.onclick = formNewsletterSubmit
btnInvite.onclick = formInviteSubmit

btnGetProducts.onclick = getProducts


