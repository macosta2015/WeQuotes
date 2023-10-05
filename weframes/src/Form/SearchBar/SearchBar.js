import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // You can perform a search operation or pass the search term to a parent component or function.
        // For now, let's just log the search term to the console.
        console.log(`Searching for: ${searchTerm}`);
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
