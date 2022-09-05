import React from 'react'
import Search from '../../img/buscar.png'
import './searchBar.css'

const SearchBar = () => {
  return (
    
    <div className='search-bar'>
        <input className='input-search' type="text" placeholder="¿Qué estás buscando?" />
        <img className='lupa' src={Search} alt='barra' />
    </div>
    
  )
}

export default SearchBar