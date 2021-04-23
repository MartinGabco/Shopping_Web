import React from 'react';

//style
import '../styles/SearchBox.css';

const SearchBox = ({ value, onChange }) => {
    return (
        <input 
            type="text"
            name="query"
            className="search-box w-50 h-50"
            placeholder="Vyhľadaj produkt podľa názvu ..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
};
 
export default SearchBox;
