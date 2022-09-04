import React from 'react'
import Search from '../../img/buscar.png'
import './searchBar.css'

const SearchBar = () => {
  return (
    
    <div className='search-bar'>
        <input type="input" placeholder="¿Qué estás buscando?" size="150px"/>
        <img src={Search} alt='barra' />
    </div>
    
  )
}

export default SearchBar