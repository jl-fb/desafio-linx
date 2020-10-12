/*
 @format
 */
import './loading.css'

const divLoad = document.createElement('div')
const load = document.createElement('div')
divLoad.insertAdjacentElement('afterbegin', load)
divLoad.classList.add('divLoader')
load.classList.add('divLoader__loader')

const Loading = (show, element) => {
  show ? (load.style.display = 'block') : (load.style.display = 'none')
  show ? (divLoad.style.display = 'block') : (divLoad.style.display = 'none')

  element.insertAdjacentElement('afterbegin', divLoad)
}
export default Loading
