import React from 'react';

const SearchInput = ({search, onSearchChange}) => (
    <input 
        type= "text"
        value= {search}
        onChange= {e => onSearchChange(e.target.value)}
    />
);


export default SearchInput;