import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-100 cursor-default'>
            <div className='max-w-[1200px] m-auto px-8'>
                <h1 data-aos='fade-right'>Projects:</h1>
                <div data-aos='fade-right' data-aos-delay='500' className='text-xl pb-5'>
                    <h3 className='text-2xl font-MADE-TOMMY-Medium'>Personal Website</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc flex-1'>
                            <li>This site was developed using Vite/React, JavaScript, HTML, CSS, and TailwindCSS</li>
                            <li>Hosted on an AWS EC2 Linux Instance</li>
                            <li>Responsive design</li>
                            <li>More content, changes, and optimizations coming soon...</li>
                            <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/vincentdigi-site'>View GitHub Repository</a></li>
                        </ul>
                        <Swiper modules={[Navigation, Pagination]} navigation pagination={{clickable: true}} loop autoplay allowTouchMove>
                            <SwiperSlide className="swiper-slide"><img src='/images/projects/web2.jpg' alt='Personal Website, Mobile Responsiveness, Home Screen' loading="lazy" /></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src='/images/projects/web1.jpg' alt='Personal Website, Desktop Home Screen' loading="lazy" /></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src='/images/projects/web3.jpg' alt='Personal Website, Mobile Responsiveness, Navigation menu' loading="lazy" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <hr />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl py-5'>
                    <h3 className='text-2xl py-5 font-MADE-TOMMY-Medium'>Packet Analysis Tool</h3>
                    <ul className='my-5 ml-8 list-disc'>
                        <li>Developed a Network Packet Analysis Tool using Python</li>
                        <li>Filtered Network Packet Captures, parsed hexadecimal data, and computed metrics</li>
                        <li>Effectively worked as a team to complete all three tasks on a schedule</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/PacketAnalysis'>View GitHub Repository</a></li>
                    </ul>
                </div>
                <hr />
                <div data-aos='fade-right' data-aos-delay='500' className='text-xl py-5'>
                    <h3 className='text-2xl py-5 font-MADE-TOMMY-Medium'>Fuzz Pedal</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc flex-1'>
                            <li>Replica of Gibson Maestro Fuzz-Tone FZ-1A from 1966</li>
                            <li>Hand soldered components on perforated board</li>
                            <li>Designed enclosure using AutoDesk Inventor</li>
                            <li>3D Printed using Creality Ender-3 V2</li>
                        </ul>
                        <Swiper modules={[Navigation, Pagination]} navigation pagination={{clickable: true}} loop autoplay allowTouchMove>
                                 <SwiperSlide className="swiper-slide"><img src='/images/projects/fuzz1.jpg' alt='Schematic of Maestro Fuzz-Tone FZ-1A' loading="lazy" /></SwiperSlide>
                                 <SwiperSlide className="swiper-slide"><img src='/images/projects/fuzz2.jpg' alt='Prototype fuzz circuit on breadboard' loading="lazy" /></SwiperSlide>
                                 <SwiperSlide className="swiper-slide"><img src='/images/projects/fuzz3.jpg' alt='Soldering fuzz circuit onto perforated board' loading="lazy" /></SwiperSlide>
                                 <SwiperSlide className="swiper-slide"><img src='/images/projects/fuzz4.jpg' alt='Fuzz circuit in 3D printed enclosure' loading="lazy" /></SwiperSlide>
                        </Swiper>
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