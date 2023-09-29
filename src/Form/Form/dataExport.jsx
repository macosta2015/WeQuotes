import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = 'service_v156l77';
const YOUR_TEMPLATE_ID = 'template_qk6izxf';
const YOUR_PUBLIC_KEY = 'template_qk6izxf';

const ExportForm = () => {
  const form = useRef();
  console.log('INSIDE THE EXPORTFORM')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export const exportFormData = (formData) => {
  console.log('Are we running!');
  console.log('Form data exported:', formData);
  console.log(formData.name);

  return (
    <div>
      {console.log('Before rendering!')}
      <ExportForm />
      {console.log('After rendering!')}
    </div>
  );
};
