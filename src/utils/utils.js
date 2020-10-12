/**
 * @format
 */

import SetProductCard from '../components/productCard/productCard'

export function Log(text = '', v) {
  console.log(`${text}`, v)
}

export function QuerySelector(query) {
  const element = document.querySelector(query)
  return element
}

export function CreateElement(tagName = '', className = 'null') {
  const element = document.createElement(tagName)
  console.log(className)
  console.log('element', element)
  element.classList.add(className)
  console.log('element', element)
  return element
}

export function InsertBeforeElement(parent, child) {
  parent.insertAdjacentElement('beforeend', child)
}

export function InsertAfterElement(parent, child) {
  parent.insertAdjacentElement('afterend', child)
}

export function SetPoductsToPage(parent, products) {
  products.forEach((prod) => {
    InsertAfterElement(parent, SetProductCard(prod))
  })
}
