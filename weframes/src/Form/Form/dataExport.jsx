import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = 'service_v156l77'; 
const YOUR_TEMPLATE_ID = 'template_prjss03'; 
const YOUR_PUBLIC_KEY = 'nhzh-yC3-sBQXybN0'; 


const to_name='Mario'

const from_name='Mario'

const message='Mario'

const reply_to='Mario'

export const exportFormData = (formData) => {
  console.log('Are we running!');
  console.log('Form data exported:', formData);
  console.log(formData.name);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  console.log('After running!');




};
