// SearchResults.js
import React from 'react';

function SearchResults({ results }) {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {results.map((item) => (
                    <li key={item.id}>
                        <strong>{item.title}:
                        </strong> {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
