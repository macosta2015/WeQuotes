import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Form.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ExportForm, exportFormData } from './dataExport'; // Import the exportFormData function
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery
import { useFormData } from '../../FormDataContext'; // Import the context hook

// Define your theme
const theme = createTheme();

const Form = () => {
  const { formData, setFormData } = useFormData(); // Use the useFormData hook
  const initialFormData = { name: '', email: '', message: '' };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!formData.isSubmitted) {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add the useMediaQuery hook to check for screen size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    // Set a flag to indicate that the form has been submitted
    setFormData({ ...formData, isSubmitted: true });

    // Call the exportFormData function to export the data
    exportFormData(formData);

    // Reset the form data to its initial state
    setFormData(initialFormData);
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
        <Grid item xs={12}>
          <Typography variant="h4" className="centered-text">
            Input the needed data to get a Quote
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={7} xl={7}>
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
        <Grid item xs={1} sm={2} md={1} lg={0} xl={1} style={{ display: isSmallScreen || isMediumScreen ? 'none' : 'block' }}>
          <div className="image-container">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image"
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
