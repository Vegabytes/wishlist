import React from 'react';

const SearchInput = ({search, onClear}) => (
    <div>
        <p>Current search: {search}</p>
        <button onClick={onClear}>Clear</button>
    </div>
);


export default SearchInput;