import React from 'react';

const About = () => {
    return (
        <div id='about' className='min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto p-8 py-16'>
                <h1 data-aos='fade-right' className='text-4xl font-bold'>About Me:</h1>
                <img src='./src/assets/images/me.JPG' className='max-w-[200px]'></img>
                <p data-aos='fade-right' data-aos-delay='500' className='text-xl font-LT-Hoop-SemiBold pt-5'>My name is Vincent DiGiovanni, I am a student at Rochester Institute of Technology, studying Computing and Information Technologies.</p>
                <p data-aos='fade-right' data-aos-delay='500' className='text-xl font-LT-Hoop-SemiBold pt-5'>I am doing a concentration on Networking, specifically Network Services & Protocols, Routing and Switching, Wireless Networking, and Network Design and Performance.</p>
            </div>
        </div>
    )
}

export default About