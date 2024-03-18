import React from 'react';
import { FaFileDownload } from "react-icons/fa";

const About = () => {
    return (
        <div id='about' className='min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto p-8 pt-6'>
                <h1 data-aos='fade-right'>About Me:</h1>
                <div data-aos='fade-right' data-aos-delay='500' className='text-xl'>
                    <p className='pt-4'>My name is Vincent DiGiovanni, I am from right outside of Philadelphia, Pennsylvania.</p>
                    <p className='pt-4'>I am a student at Rochester Institute of Technology, studying Computing and Information Technologies.</p>
                    <p className='pt-4'>My concentration focuses on Networking, specifically Network Services & Protocols, Routing and Switching, Wireless Networking, and Network Design and Performance.</p>
                    <p className='pt-4'>I am passionate about all things computers, electronics, and I love to learn.</p>
                    <h3 className='pt-8 text-xl font-MADE-TOMMY-Medium'>My resume is available for download below:</h3>
                    <a className='bg-blue-500 text-white min-w-[250px] max-w-[400px] min-h-[50px] py-4 my-2 flex justify-center items-center hover:bg-blue-800 ease-in duration-100' href='/files/DiGiovanniV-Resume-2024.pdf'>
                        <FaFileDownload size={30}/>
                        <span className='pl-4'>Download Resume</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About