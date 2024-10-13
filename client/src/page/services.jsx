import React from 'react';
import { Button } from '@mui/material';
import Bg from '../public/assets/image.png'
export default function Services(){
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
                <div className='w-full h-full flex justify-center gap-16 py-10 flex-wrap bg-custom_bg '>
                    <div className='flex items-center justify-center shadow-sm shadow-black  h-[350px] w-[550px] bg-white'>
                        <h1>Online Appointment booking</h1>
                        <p className='hidden hover:flex'>Say goodbye to long queues and waiting times! With our seamless online appointment booking system, patients can easily schedule consultations with the best doctors at their convenience. Stay in control of your health with just a few clicks.</p>
                    </div>
                    <div className='p-2 shadow-sm shadow-black flex items-center justify-center  h-[350px] w-[550px] bg-white'>
                        <h1>Managing Health Records</h1>
                        <p className='hidden hover:flex'>Say goodbye to long queues and waiting times! With our seamless online appointment booking system, patients can easily schedule consultations with the best doctors at their convenience. Stay in control of your health with just a few clicks.</p>

                    </div>
                    <div className='p-2 shadow-sm shadow-black flex items-center justify-center  h-[350px] w-[550px] bg-white'>
                        <h1>Lab Reports</h1>
                        <p className='hidden hover:flex'>Say goodbye to long queues and waiting times! With our seamless online appointment booking system, patients can easily schedule consultations with the best doctors at their convenience. Stay in control of your health with just a few clicks.</p>

                    </div>
                    <div className='p-2 shadow-sm shadow-black flex items-center justify-center  h-[350px] w-[550px] bg-white'>
                        <h1>Fitness Tracking</h1>
                        <p className='hidden hover:flex'>Say goodbye to long queues and waiting times! With our seamless online appointment booking system, patients can easily schedule consultations with the best doctors at their convenience. Stay in control of your health with just a few clicks.</p>

                    </div>
                </div>
        </>
    );
}