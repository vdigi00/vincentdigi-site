import React from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-100 cursor-default'>
            <div className='max-w-[1500px] m-auto px-8'>
                <h1 data-aos='fade-right' data-aos-delay='500'>Projects:</h1>
                <div className='text-xl py-5'>
                    <h3 className='text-2xl font-MADE-TOMMY-Medium'>Personal Website</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc flex-1'>
                            <li>This site was developed using Vite/React, JavaScript, HTML, CSS, and TailwindCSS</li>
                            <li>Hosted on an AWS EC2 Linux Instance</li>
                            <li>Responsive design</li>
                            <li>More content, changes, and optimizations coming soon...</li>
                            <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/vincentdigi-site'>View GitHub Repository</a></li>
                        </ul>
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src='/images/projects/web1.jpg' alt='Personal Website, Desktop Home Screen' loading="lazy" /></div>
                                <div class="swiper-slide"><img src='/images/projects/web2.jpg' alt='Personal Website, Mobile Responsiveness, Home Screen' loading="lazy" /></div>
                                <div class="swiper-slide"><img src='/images/projects/web3.jpg' alt='Personal Website, Mobile Responsiveness, Navigation menu' loading="lazy" /></div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-xl py-5'>
                    <h3 className='text-2xl py-5 font-MADE-TOMMY-Medium'>Packet Analysis Tool</h3>
                    <ul className='my-5 ml-8 list-disc'>
                        <li>Developed a Network Packet Analysis Tool using Python</li>
                        <li>Filtered Network Packet Captures, parsed hexadecimal data, and computed metrics</li>
                        <li>Effectively worked as a team to complete all three tasks on a schedule</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/PacketAnalysis'>View GitHub Repository</a></li>
                    </ul>
                </div>
                <hr />
                <div className='text-xl py-5'>
                    <h3 className='text-2xl py-5 font-MADE-TOMMY-Medium'>Fuzz Pedal</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc flex-1'>
                            <li>Replica of Gibson Maestro Fuzz-Tone FZ-1A from 1966</li>
                            <li>Hand soldered components on perforated board</li>
                            <li>Designed enclosure using AutoDesk Inventor</li>
                            <li>3D Printed using Creality Ender-3 V2</li>
                        </ul>
                        <div class="swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src='/images/projects/fuzz1.jpg' alt='Schematic of Maestro Fuzz-Tone FZ-1A' loading="lazy" /></div>
                                <div class="swiper-slide"><img src='/images/projects/fuzz2.jpg' alt='Prototype fuzz circuit on breadboard' loading="lazy" /></div>
                                <div class="swiper-slide"><img src='/images/projects/fuzz3.jpg' alt='Soldering fuzz circuit onto perforated board' loading="lazy" /></div>
                                <div class="swiper-slide"><img src='/images/projects/fuzz4.jpg' alt='Fuzz circuit in 3D printed enclosure' loading="lazy" /></div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
                {/*<div className='text-xl'>
                    <h3>3D Printed Planes</h3>
                </div>*/}
            </div>
        </div>
    )
}

export default Projects