import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Form.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { exportFormData } from './dataExport'; // Import the exportFormData function


const Form = () => {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!formData.isSubmitted) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
        // Set a flag to indicate that the form has been submitted
        setFormData({ ...formData, isSubmitted: true });
    
        // Call the exportFormData function to export the data
        exportFormData(formData);
  };

  //Code for the Grid
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  })

  );


  return (
    <Box className="custom-box" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}> 
      {/* Grid spacing is the space columns distance */}
        <Grid item xs={12}>
        <Typography variant="h4" className="centered-text">
          Fill out the Form
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <form className="centered-text" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;