import renderCart from "./renderCart"

const cart = () => {
  const cartBtn = document.getElementById("cart")
  const cartModal = document.querySelector(".cart")
  const cartCloseBtn = cartModal.querySelector(".cart-close")
  const cartTotal = cartModal.querySelector(".cart-total > span")
  const goodsWrapper = document.querySelector(".goods")
  const counter = document.querySelector(".counter")
  

  const openCart = () => {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []

    cartModal.style.display = "flex"

    renderCart(cart)
    cartTotal.textContent = cart.reduce((sum, item) => {
      return sum + item.price
    }, 0)
  }

  const closeCart = () => {
    cartModal.style.display = ""
  }

  cartBtn.addEventListener("click", openCart)
  cartCloseBtn.addEventListener("click", closeCart)

  goodsWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const card = e.target.closest('.card')
      const key = card.dataset.key
      const goods = JSON.parse(localStorage.getItem('goods'))
      const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []
      const goodItem = goods.find((item) => {
        return item.id === key
      })

      cart.push(goodItem)
      
      localStorage.setItem("cart", JSON.stringify(cart))
      
      counter.textContent = cart.length
    }
  })

  cartModal.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-primary")) {
      const card = e.target.closest(".card")
      const key = card.dataset.key
      const cart = JSON.parse(localStorage.getItem("cart"))
      const goodItem = cart.findIndex(item => item.id === key)      

      cart.splice(goodItem, 1)
      
      localStorage.setItem("cart", JSON.stringify(cart)) 

      renderCart(cart)

      counter.textContent = cart.length
    }
  })
}

export default cart