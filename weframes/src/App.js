import React, { createContext, useContext } from 'react';
import Form from './Form/Form';
import MediaCard from './Form/MediaCard';
import ImgMediaCard from './Form/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Hello WeQuotes
          <Form />
          <MediaCard/>
          <ImgMediaCard/>
      </header>
    </div>
  );
}

export default App;
