export const searchFilter = (goods, value) => {  
  return goods.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((item) => {
    return item.category === value
  })
}

export const priceFilter = (goods, valueMin, valueMax, sale) => {
  if (!valueMin) valueMin = 0
  if (!valueMax) valueMax = Infinity
  
  return goods.filter((item) => {
    return item.price >= valueMin && item.price <= valueMax && (sale ? item.sale === true : true)
  })
}