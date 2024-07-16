import React from 'react';
import { FaFileDownload } from "react-icons/fa";

const About = () => {
    return (
        <section id='about'>
            <div className='m-auto max-w-[1000px] p-8'>
                <h1 data-aos='fade-right' className='pb-8 underline underline-offset-8'>About Me</h1>
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl'>
                    <div className='flex flex-col gap-4'>
                        <p>My name is Vincent DiGiovanni and welcome to my site!</p>
                        <p>I am a student at Rochester Institute of Technology, studying Computing and Information Technologies.</p>
                        <p>My concentration focuses on Networking, specifically Network Services & Protocols, Routing and Switching, Wireless Networking, and Network Design and Performance.</p>
                        <p>I am passionate about all things computers, electronics, and I love to learn.</p>
                    </div>
                    
                    <h3 className='pt-4'>My resume is available below:</h3>
                    <a href='/files/DiGiovanniV-Resume-2024.pdf' className='bg-blue-500 text-white min-w-[200px] max-w-[250px] min-h-[50px] mt-4 flex justify-center items-center shadow-md shadow-slate-600 hover:bg-blue-800 ease-in duration-100'>
                        <FaFileDownload size={30}/>
                        <span className='py-4'>View Resume</span>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default About;