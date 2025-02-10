const getData = (str) => {
  return fetch(
    `https://ozone-1d87a-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    // 'http://localhost:3000/goods'
  ).then((response) => response.json())
}

export default getData