import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchDisplay from './SearchDisplay';

const Search = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <SearchInput search={search} onSearchChange={setSearch}/>
            <SearchDisplay search={search} onClear={()=> setSearch('')}/>
        </div>
    )
};




export default Search;