import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormDataProvider } from './FormDataContext'; // Import the FormDataProvider


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormDataProvider> {/* Wrap your App component with FormDataProvider */}
      <App />
    </FormDataProvider>  </React.StrictMode>
);



