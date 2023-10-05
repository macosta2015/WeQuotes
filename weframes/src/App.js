import React, { createContext, useContext } from 'react';
import MediaCard from './Form/MediaCard/MediaCard';
import Card from './Form/Card/Card';
import Header from './Form/Header/Header';
import Form from './Form/Form/Form';
import { FormDataProvider } from './FormDataContext'; // Import the FormDataProvider
import DisplayData from './Form/Emailoutput/Emailoutput';
import SearchBar from './Form/SearchBar/SearchBar';
import Data from './Form/SearchBar/Data';


function App() {

  const handleSearch = (searchTerm) => { // Implement your search logic here.
    console.log(`Searching for: ${searchTerm}`);
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
        <SearchBar onSearch={handleSearch} />      </header>
    </div>
  );
}

export default App;
