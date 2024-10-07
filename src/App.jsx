import React from 'react'
import Navbar from './components/navbar/navbar'

import SearchBar from './components/SearchBar/searchbar';
import Categories from './components/catogories/Categories';


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <SearchBar/>
      <Categories />
    </div>
  )
}

export default App
