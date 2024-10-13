import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Bg from '../public/assets/image.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your data: " + JSON.stringify(formData)); // Updated to show the data properly
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-around items-center h-[500px] w-full bg-gradient-to-r from-[#003C43] to-[#77B0AA] p-5'>
        <div className='flex flex-col justify-center gap-5 text-center md:text-left'>
          <h1 className='text-white text-4xl md:text-5xl font-bold bg-gradient-to-r to-[#00b4d8] via-[#0077b6] from-[#00b4d8] text-transparent bg-clip-text'>
            Healthcare Management Solutions
          </h1>
          <p className='text-white text-lg md:text-xl'>
            Discover our unique services and experiences
          </p>
          <Button sx={{ bgcolor: 'white', width: '150px', color: '#0d454b' }}>
            Learn more
          </Button>
        </div>
        <img src={Bg} alt="Healthcare" className='h-48 md:h-72 w-48 md:w-72' />
      </div>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-2xl font-bold mb-5">Pitch Us</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full max-w-md'>
          <TextField
            label='Name'
            variant='outlined'
            onChange={handleChange}
            name="name" // Added name attribute for correct form data handling
            sx={{ width: '100%' }}
          />
          <TextField
            label='Email'
            variant='outlined'
            onChange={handleChange}
            name="email" // Added name attribute for correct form data handling
            sx={{ width: '100%' }}
          />
          <TextField
            label='Message'
            variant='outlined'
            onChange={handleChange}
            name="message" // Added name attribute for correct form data handling
            multiline // Enable multiline for better message input
            rows={4} // Set initial rows for the textarea
            sx={{ width: '100%' }}
          />
          <Button
            sx={{ marginTop: '20px', bgcolor: 'white', width: '150px', color: '#0d454b' }}
            type='submit'
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}