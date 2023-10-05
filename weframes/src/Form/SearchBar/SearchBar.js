// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file


function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
