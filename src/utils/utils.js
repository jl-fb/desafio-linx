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
  element.classList.add(className)
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
export function SetPoductsToPageAppend(parent, products) {
  Log('APEND', parent)
  products.forEach((prod) => {
    parent.append(SetProductCard(prod))
  })
}
export function IsValidCPF(cpf) {
  const pattern = /^(\d{3})(\d{3})(\d{3})(\d{2})$/g
  const validNumber = pattern.test(cpf)

  return validNumber
}

export function IsValidEmail(email) {
  const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g
  const valid = pattern.test(email)
  return valid
}

export function SetMaskCPF(cpf) {
  const pattern = /^(\d{3})(\d{3})(\d{3})(\d{2})$/g
  const cpfMasked = cpf.replace(pattern, '$1.$2.$3-$4')
  return cpfMasked
}

export function HideElement(...element) {
  element.forEach((ele) => (ele.style.display = 'none'))
}
