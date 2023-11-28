import React, { createContext, useContext, useState } from 'react';
import MediaCard from './Form/MediaCard/MediaCard';
import Card from './Form/Card/Card';
import Header from './Form/Header/Header';
import Form from './Form/Form/Form';
import { FormDataProvider } from './FormDataContext'; // Import the FormDataProvider
import DisplayData from './Form/Emailoutput/Emailoutput';
import SearchBar from './Form/SearchBar/SearchBar';
import Data from './Form/SearchBar/Data';
import SearchResults from './Form/SearchBar/SearchResults';


function App() {
  console.log('We are going to keep rewiring our brains until the changes happenxw')
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log('Hello World')
    // Filter data based on whether the search term appears in the title or description
    const filteredResults = Data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };


  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Form />
        {/* <Card/> */}
        {/* <MediaCard/> */}
        {/* <DisplayData /> */}
        <h1>Search App</h1>
        <SearchBar onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </header>
    </div>
  );
}

export default App;
