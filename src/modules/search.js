import { searchFilter } from "./filters"
import getData from "./getData"
import { debounce } from "./helpers"
import renderGoods from "./renderGoods"

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input')

  const debounceSearch = debounce((e) => {
    getData().then((data) => {
      renderGoods(searchFilter(data, e.target.value))
    })
  })

  searchInput.addEventListener('input', debounceSearch)
}

export default search