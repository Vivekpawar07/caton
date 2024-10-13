import React from 'react';
import { Button } from '@mui/material';
import Bg from '../public/assets/image.png'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
export default function Home(){
    return(
        <>
            <div className='flex flex-col h-full w-full'>
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
                <div className='h-[100px] w-full flex justify-center gap-4 items-center bg-custom_bg'>
                        <Button sx={{bgcolor:'white',width:'250px',color:'#0d454b'}}>Book Your Appointment</Button>
                        <Button sx={{bgcolor:'white',width:'250px',color:'#0d454b'}}> orgnize medical records</Button>
                </div>
                <Divider sx={{bgcolor:'#e1f2f8'}}>
                    <Chip label="What we do" size="large" sx={{bgcolor:'white',color:'#0d454b'}} />
                </Divider>
                
            </div>
        </>
    );
}