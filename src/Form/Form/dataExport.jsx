import React from 'react';
import emailjs from '@emailjs/browser';


const YOUR_SERVICE_ID = 'service_v156l77';
const YOUR_TEMPLATE_ID = 'template_qk6izxf';
const YOUR_PUBLIC_KEY = 'nhzh-yC3-sBQXybN0';

export const exportFormData = (formData) => {
  console.log('Are we running!');
  console.log('Form data exported:', formData);

  // Assign formData to form
  const form = formData;

  console.log('form', form)
  console.log('form.name', form.name)
  console.log('form.email', form.email)
  console.log('form.message', form.message)


//   var templateParams = {
//     from_name: 'James',
//     to_name: 'Check this out!',
//     message: 'Hello World'
// };

  // const sendEmail = (e) => {
  //   e.preventDefault();

    // emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  // };

  console.log('Hello sendemail');

  return (
    <div>
      {console.log('Before rendering!')}
      {console.log('After rendering!')}
    </div>
  );
};
