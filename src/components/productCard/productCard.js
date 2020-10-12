/**
 * @format
 */

import './productCard.css'
import * as utils from '../../utils/utils.js'

function SetProductCard(ele) {
  const productCard = utils.CreateElement('div', 'section__product-card')
  const productImg = utils.CreateElement('img', 'section__product-img')
  const productInfo = utils.CreateElement('div', 'section__product-infos')
  let productName = utils.CreateElement('div', 'section__product-name')
  let productoldPrice = utils.CreateElement('div', 'section__product-old-price')
  let producActualPrice = utils.CreateElement('div', 'section__product-price')
  let productSlicePrice = utils.CreateElement('div', 'section__product-old-price')
  let productButton = utils.CreateElement('button', 'section__product-button')

  utils.Log('LOGGG', productCard)

  utils.InsertBeforeElement(productCard, productImg)
  utils.InsertBeforeElement(productCard, productInfo)
  utils.InsertBeforeElement(productInfo, productName)
  utils.InsertBeforeElement(productInfo, productoldPrice)
  utils.InsertBeforeElement(productInfo, producActualPrice)
  utils.InsertBeforeElement(productInfo, productSlicePrice)
  utils.InsertBeforeElement(productInfo, productButton)

  function setInfos() {
    productImg.setAttribute('src', ele.image)
    productName.innerHTML = ele.name
    productoldPrice.innerHTML = `De R$${ele.oldPrice}`
    producActualPrice.innerHTML = `Por R$${ele.price}`
    productSlicePrice.innerHTML = `ou ${ele.installments.count} de R$${ele.installments.value}`
    productButton.innerHTML = 'Comprar'
  }
  setInfos()

  return productCard
}

// productCard.classList.add('section__product-card')
// productImg.classList.add('section__product-img')
// productInfo.classList.add('section__product-infos')

export default SetProductCard
