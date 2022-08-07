import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import ProductsApi from '../../../api/Products'
import './SearchBox.scss'

function Searchbox({ darkMode }) {
  const [filteredData, setFilteredData] = useState([])
  const [products, setProducst] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const getData = async () => {
    try {
      const res = await ProductsApi.gets()
      setProducst(res.data)
    } catch (err) {
      Promise.reject(err)
    }
  }
  useEffect(() => {
    getData()
    console.log(products)
  }, [])
  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    // eslint-disable-next-line max-len
    const newFilter = Object.values(products).filter((product) => product.name.toLowerCase().includes(searchWord.toLowerCase()))
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className="search">
      <input
        type="text"
        value={wordEntered}
        placeholder="جستجو کنید..."
        onChange={handleFilter}
      />
      <span className="icon-search">
        {filteredData.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="close-btn" onClick={clearInput} />
        )}
      </span>
      {filteredData.length !== 0 && (
      <div className="search-resault">
        {filteredData.slice(0, 15).map((product, key) => (
          <Link
            className="links"
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            to={`/product${product.id}`}
          >
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
      )}
    </div>
  )
}

export default Searchbox
