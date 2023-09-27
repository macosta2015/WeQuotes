import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import the 'emailjs-com' library

const YOUR_SERVICE_ID = 'service_v156l77';
const YOUR_TEMPLATE_ID = 'template_qk6izxf';
const YOUR_USER_ID = 'nhzh-yC3-sBQXybN0'; // Replace with your actual user ID

export const exportFormData = (formData) => {
  console.log('Before sending email!');
  console.log('Form data exported:', formData);
  console.log(formData.name);

  // Define the email content
  const emailParams = {
    to_name: 'Mario',
    from_name: 'Mario',
    message: 'Hello, this is a test email from Email.js!',
    reply_to: 'macosta2015@my.fit.edu',
  };

  // Send the email
  emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, emailParams, YOUR_USER_ID)
    .then((result) => {
      console.log('Email sent successfully:', result);
      console.log('After sending email!'); // Log after sending the email
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      console.log('After sending email!'); // Log after trying to send the email
    });
};


// import React, { useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser';

// const YOUR_SERVICE_ID = 'service_v156l77'; 
// const YOUR_TEMPLATE_ID = 'template_prjss03'; 
// const YOUR_PUBLIC_KEY = 'nhzh-yC3-sBQXybN0'; 


// const to_name='Mario'

// const from_name='Mario'

// const message='Mario'

// const reply_to='Mario'

// export const exportFormData = (formData) => {
//   console.log('Before sending email!');
//   console.log('Form data exported:', formData);
//   console.log(formData.name);


//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
//   console.log('After sending email!');
// };
