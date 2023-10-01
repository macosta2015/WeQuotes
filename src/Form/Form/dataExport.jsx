import React from 'react';
import emailjs from '@emailjs/browser';


const YOUR_SERVICE_ID = 'service_v156l77';
const YOUR_TEMPLATE_ID = 'template_qk6izxf';
const YOUR_PUBLIC_KEY = 'nhzh-yC3-sBQXybN0';

export const exportFormData = async (formData) => {
  console.log('Are we running!');
  console.log('Form data exported:', formData);

  // Assign formData to form
  const form = formData;

  await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_PUBLIC_KEY)

  console.log('Hello sendemail');


};
