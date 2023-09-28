import React from 'react';
import Form from '../Form/Form'
import {useState} from 'react'

const exportFormData = (formData) => {
    console.log('Inside EmailOutput!')
    // You can handle the exported data here.
    console.log('Form data exported:', formData);
    // You can perform additional actions, send it to an API, or save it to storage.
  };


function DisplayData() {
  const data = { name: 'Mario', email: 'Acosta@titanamerica.com', message: 'hrhr' };
  const [count, setCount] = useState(0)
  
  console.log('Form: ' + Form)

  return (
    <div>
        <p>You clicked {count} times</p>
        <p>Name is {data.name}</p>
        <p>Email  is {data.email}</p>
        <p>Message is {data.message}</p>
        <button onClick={() => setCount(count + 1)}>Click me </button>
        <h2>User Information</h2>
    </div>
  );
}

export default DisplayData;