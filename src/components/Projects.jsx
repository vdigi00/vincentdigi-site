import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-100 cursor-default'>
            <div className='max-w-[1000px] m-auto px-8'>
                <h1 data-aos='fade-right' data-aos-delay='500'>Projects:</h1>
                <div className='text-xl'>
                    <h3 className='text-2xl mb-5 font-MADE-TOMMY-Medium'>Personal Website</h3>
                    <swiper-container navigation='true' pagination='true' speed='500' loop='true'>
                        <swiper-slide><img src='/images/projects/web1.jpg' alt='Personal Website, Desktop Home Screen' loading="lazy" /></swiper-slide>
                        <swiper-slide><img src='/images/projects/web2.jpg' alt='Personal Website, Mobile Responsiveness, Home Screen' loading="lazy" /></swiper-slide>
                        <swiper-slide><img src='/images/projects/web3.jpg' alt='Personal Website, Mobile Responsiveness, Navigation menu' loading="lazy" /></swiper-slide>
                    </swiper-container>
                    <ul className='my-5 ml-8 list-disc'>
                        <li>This site was developed using Vite/React, JavaScript, HTML, CSS, and TailwindCSS.</li>
                        <li>Hosted on an AWS EC2 Linux Instance.</li>
                        <li>Responsive design.</li>
                        <li>More content, changes, and optimizations coming soon...</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/vincentdigi-site'>View GitHub Repository</a></li>
                    </ul>
                </div>
                <hr />
                <div className='text-xl pb-5'>
                    <h3 className='text-2xl my-5 font-MADE-TOMMY-Medium'>Packet Analysis Tool</h3>
                    <ul className='my-5 ml-8 list-disc'>
                        <li>Developed a Network Packet Analysis Tool using Python.</li>
                        <li>Filtered Network Packet Captures, parsed hexadecimal data, and computed metrics.</li>
                        <li>Effectively worked as a team to complete all three tasks on a schedule</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/PacketAnalysis'>View GitHub Repository</a></li>
                    </ul>
                </div>
                {/*<div className='text-xl'>
                    <h3>Fuzz Pedal</h3>
                </div>
                <div className='text-xl'>
                    <h3>3D Printed Planes</h3>
                </div>*/}
            </div>
        </div>
    )
}

export default Projects