import React, { createContext, useContext } from 'react';
import Form from './Form/Form';
import MediaCard from './Form/MediaCard/MediaCard';
import Card from './Form/Card/Card';
import Header from './Form/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
          <Form />
          <Card/>
          <MediaCard/>
      </header>
    </div>
  );
}

export default App;
