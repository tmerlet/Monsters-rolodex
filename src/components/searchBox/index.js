import React from 'react';
import './styles.css'

const SearchBox = ({placeholder, handleChange} ) => (
  <input onChange={ handleChange } type='search' placeholder='Search Monsters' className='search-box'/>
  );

export default SearchBox;