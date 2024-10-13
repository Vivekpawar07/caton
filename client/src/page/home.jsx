import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import Bg from '../public/assets/image.png';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    const text = [
        {
            heading: 'Streamlined operations',
            para: 'Fully integrated clinical, support, finance and billing, supply chain, and administrative functions for more efficient operations',
        },
        {
            heading: 'Enhanced patient care',
            para: 'Structured, specialty-wise electronic medical records enabling doctors to provide diagnosis-based care with better visibility to patients',
        },
        {
            heading: 'Interoperability across standards',
            para: 'Compatible with standards like ICD, CPT, HL7, and DICOM.',
        },
        {
            heading: 'Information Security',
            para: 'Role-based security matrix to define user access controls.',
        },
    ];

    const data = [
        {
            img: ``,
            sub: 'Patient Care',
            heading: 'OP Management',
            para: 'Manage outpatient services effectively.',
        },
        {
            img: ``,
            sub: 'Patient Care',
            heading: 'IP Management and ADT',
            para: 'Handle inpatient services and admissions.',
        },
        {
            img: ``,
            sub: 'Patient Care',
            heading: 'Registration and Appointment',
            para: 'Simplify the registration and appointment processes',
        },
        {
            img: ``,
            sub: 'Clinical',
            heading: 'Doctor’s Workbench (CPOE)',
            para: 'Manage orders and clinical workflows efficiently.',
        },
        {
            img: ``,
            sub: 'Clinical',
            heading: 'Nursing, OT',
            para: 'Oversee nursing operations and surgical procedures.',
        },
    ];

    return (
        <>
            <div className="flex flex-col h-full w-full">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-around items-center h-[500px] w-full bg-gradient-to-r from-[#003C43] to-[#77B0AA]">
                    <div className="flex flex-col justify-center gap-5" data-aos="fade-right">
                        <div className="flex flex-col">
                            <h1 className="text-white text-4xl md:text-5xl font-bold bg-gradient-to-r to-[#00b4d8] via-[#0077b6] from-[#00b4d8] text-transparent bg-clip-text">
                                Healthcare Management Solutions
                            </h1>
                            <p className="text-white text-lg md:text-xl">
                                Discover our unique services and experiences
                            </p>
                        </div>
                        <Button sx={{ bgcolor: 'white', width: '150px', color: '#0d454b' }}>
                            Learn more
                        </Button>
                    </div>
                    <img src={Bg} alt="Healthcare" className="h-48 md:h-72 w-48 md:w-72" data-aos="fade-left" />
                </div>

                {/* CTA Section */}
                <div className="h-[100px] w-full flex flex-col md:flex-row justify-center gap-4 items-center bg-custom_bg">
                    <Button sx={{ bgcolor: 'white', width: '250px', color: '#0d454b' }}>
                        Book Your Appointment
                    </Button>
                    <Button sx={{ bgcolor: 'white', width: '250px', color: '#0d454b' }}>
                        Organize Medical Records
                    </Button>
                </div>

                {/* Divider with Chip */}
                <Divider sx={{ bgcolor: '#e1f2f8' }} data-aos="fade-up">
                    <Chip label="What we do" size="large" sx={{ bgcolor: 'white', color: '#0d454b', marginBottom: '20%' }} />
                </Divider>

                {/* Services Section */}
                <div className="w-full h-full px-4 md:px-[10%] py-10 flex flex-col gap-10 bg-custom_bg">
                    <div
                        className="flex flex-col items-center gap-10 w-full h-full bg-white shadow-md rounded-md p-6 md:p-12"
                        data-aos="fade-up"
                    >
                        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#0d454b]">
                            Improve productivity with the most advanced hospital management system
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
                            <img
                                src={Bg}
                                alt="Service"
                                className="h-48 md:h-72"
                                data-aos="fade-right"
                            />
                            <div className="flex flex-col flex-wrap w-full md:w-[50%] gap-5">
                                {text.map((texts, index) => (
                                    <div className="flex flex-col flex-wrap" key={index} data-aos="fade-up">
                                        <h1 className="text-lg md:text-xl font-extrabold">{texts.heading}</h1>
                                        <p>{texts.para}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center gap-10 flex-wrap'>
                            <div className='flex flex-wrap justify-center gap-5'>
                                {data.map((datas, index) => (
                                    <div
                                        className="flex flex-col flex-2  flex-wrap items-center justify-center shadow-sm shadow-black h-[200px] w-[200px] bg-white relative overflow-hidden group"
                                        data-aos="fade-up"
                                        key={index}
                                    >
                                        <img src={datas.img} alt="" className="w-full h-auto" />
                                        <h3 className="font-semibold">{datas.sub}</h3>
                                        <h1 className="z-10 font-bold">{datas.heading}</h1>
                                        <p className="absolute bottom-0 left-0 p-5 bg-white w-full opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                            {datas.para}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h1>Caton Hospital Software Modules</h1>
                                <p>Our hospital management software provides extensive coverage for all departments and functions. From clinical to administrative modules, Caton is your one-stop solution for efficient hospital operations.</p>
                                <Button>Viwe all modules</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}