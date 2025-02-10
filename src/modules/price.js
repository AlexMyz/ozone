import { priceFilter } from "./filters"
import getData from "./getData"
import renderGoods from "./renderGoods"

const price = () => {
  const priceMin = document.getElementById('min')
  const priceMax = document.getElementById('max')
  const discount = document.getElementById('discount-checkbox')
  const checkmark = document.querySelector(".filter-check_checkmark")

  let valueMin
  let valueMax
  let sale = false

  priceMin.addEventListener('input', (e) => {
    valueMin = e.target.value
    valueMax = priceMax.value
    
    getData().then((data) => {
      renderGoods(priceFilter(data, valueMin, valueMax, sale))
    })
  })

  priceMax.addEventListener("input", (e) => {
    valueMax = e.target.value
    valueMin = priceMin.value

    getData().then((data) => {
      renderGoods(priceFilter(data, valueMin, valueMax, sale))
    })
  })

  discount.addEventListener('change', () => {
    checkmark.classList.toggle('checked')    

    sale = !sale

    getData().then((data) => {
      renderGoods(priceFilter(data, valueMin, valueMax, sale))
    })
    
  })
}

export default price