import React from 'react';
import './search-bos.style.css';

const SearchBox = ({placeholder , changehandler}) => (
    <input className = 'search'
        type='search' 
        placeholder={placeholder} 
        onChange = {changehandler}
    />

);

export default SearchBox;