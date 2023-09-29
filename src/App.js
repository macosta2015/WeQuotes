import React, { createContext, useContext } from 'react';
import MediaCard from './Form/MediaCard/MediaCard';
import Card from './Form/Card/Card';
import Header from './Form/Header/Header';
import Form from './Form/Form/Form';
import { FormDataProvider } from './FormDataContext'; // Import the FormDataProvider
import DisplayData from './Form/Emailoutput/Emailoutput';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Form />
        {/* <Card/> */}
        {/* <MediaCard/> */}
        <DisplayData/>
      </header>
    </div>
  );
}

export default App;
