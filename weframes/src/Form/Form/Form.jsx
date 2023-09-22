import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Form.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };

  //Code for the Grid
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box className="custom-box" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );

  // return (
  //     <div className="centered-container">
  //       <Typography variant="h1" className="custom-heading">
  //         Fill out the Form 
  //       </Typography>
  //         <form onSubmit={handleSubmit}>
  //           <div>
  //             <label>Name:</label>
  //             <input
  //               type="text"
  //               name="name"
  //               value={formData.name}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <label>Email:</label>
  //             <input
  //               type="email"
  //               name="email"
  //               value={formData.email}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <label>Message:</label>
  //             <textarea
  //               name="message"
  //               value={formData.message}
  //               onChange={handleChange}
  //               required
  //             ></textarea>
  //           </div>
  //           <button type="submit">Submit</button>
  //         </form>
  //   </div>
  // );
};

export default Form;