import React, { createContext, useContext } from 'react';
import MediaCard from './Form/MediaCard/MediaCard';
import Card from './Form/Card/Card';
import Header from './Form/Header/Header';
import Form from './Form/Form/Form';
import { FormDataProvider } from './FormDataContext'; // Import the FormDataProvider

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Form />
        {/* <Card/> */}
        {/* <MediaCard/> */}
      </header>
    </div>
  );
}

export default App;
