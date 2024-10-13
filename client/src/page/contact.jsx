import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Bg from '../public/assets/image.png'
export default function Contact(){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("your data:",formData);
    }
    const style = {
        width:'350px',

    }
    return(
        <>
                <div className='flex justify-around items-center h-[500px] w-full bg-gradient-to-r from-[#003C43] to-[#77B0AA]'>
                    <div className='flex flex-col justify-center gap-5 '>
                        <div className='flex flex-col '>
                            <h1 className='text-white text-5xl font-bold bg-gradient-to-r to-[#00b4d8] via-[#0077b6] from-[#00b4d8] text-transparent bg-clip-text'>Healthcare Management Solutions</h1>
                            <p className='text-white text-xl'>Discover our unique services and experiences</p>
                        </div>
                        <Button sx={{bgcolor:'white',width:'150px',color:'#0d454b'}}>Learn more</Button>
                    </div>
                    <img src={Bg} alt="" className='h-72 w-72 ' />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center'>
                    <h1>Pitch us</h1>
                    <TextField
                        label='Name'
                        variant='outlined'
                        onChange={handleChange}
                        sx={style}
                    />
                    <TextField
                        id="outlined-basic"
                        label='email'
                        variant='outlined'
                        onChange={handleChange}
                        sx={style}
                    />
                    <TextField
                        label='message'
                        variant='outlined'
                        onChange={handleChange}
                        sx={style}
                    />

                    <Button sx={{marginTop:'20px',bgcolor:'white',width:'150px',color:'#0d454b'}} type='submit'>
                        Submit
                    </Button>
                </form>
        </>
    );
}