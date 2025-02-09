const getData = () => {
  return fetch(
    "https://ozone-1d87a-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => response.json())
}

export default getData