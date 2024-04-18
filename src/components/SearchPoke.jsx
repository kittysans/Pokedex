import '../components/SearchPoke.css'

// icons
import { IoSearch } from "react-icons/io5";

function SearchPoke({ setSearchBarValue }) {
  const handleInputChange = (e) => {
    setSearchBarValue(e.target.value)
  }

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint?</p>
        <div className='input-container'>
          <IoSearch className='icon'/>
          <input type="text" onChange={handleInputChange} placeholder='searching name, type, id...'/>
        </div>
      </div>
    </div>
  )
}

export default SearchPoke