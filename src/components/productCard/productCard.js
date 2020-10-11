/**
 * @format
 */

let products = [
  {
    description:
      'Product long description number 0 just to make more than one like of text.',
    id: 0,
    image: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
    installments: { count: 10, value: 13.3 },
    name: 'Product Number 0',
    oldPrice: 177,
    price: 133,
  },
  {
    description:
      'Product long description number 0 just to make more than one like of text.',
    id: 0,
    image: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
    installments: { count: 10, value: 13.3 },
    name: 'Product Number 0',
    oldPrice: 177,
    price: 133,
  },
]

import './productCard.css'
import * as utils from '../../utils/utils.js'

function setProductCard(ele) {
  const productCard = utils.CreateElement('div', 'section__product-card')
  const productImg = utils.CreateElement('img', 'section__product-img')
  const productInfo = utils.CreateElement('div', 'section__product-infos')
  let productName = utils.CreateElement('div', 'section__product-name')
  let productoldPrice = utils.CreateElement('div', 'section__product-price')
  let producActualPrice = utils.CreateElement('div', 'section__product-price')
  let productSlicePrice = utils.CreateElement('div', 'section__product-slice-price')
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
    productName = ele.name
    productoldPrice.innerHTML = ele.oldPrice
    producActualPrice.innerHTML = ele.price

    productButton.innerHTML = 'Comprar'
  }
  setInfos()

  return productCard
}

// productCard.classList.add('section__product-card')
// productImg.classList.add('section__product-img')
// productInfo.classList.add('section__product-infos')

export default setProductCard
