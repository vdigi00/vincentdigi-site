import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiArrowDownWideFill } from 'react-icons/ri';
import { IconContext } from "react-icons";

const Hero = () => {
    return (
        <div id='home'>
            <img className='w-full h-screen object-cover' src='/images/cover.jpg' alt='Space Background' loading=" lazy" />
            <div className='w-full h-screen absolute m-auto top-0 left-0 flex flex-col justify-center items-center bg-white/70 cursor-default'>
                <div className='m-auto flex flex-col justify-center grow'>
                    <div data-aos='fade-right' >
                        <h1 className='lg:text-8xl md:text-7xl text-6xl p-0'>Welcome</h1>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='500'>    
                        <h2 className='lg:text-2xl md:text-xl pt-4'>My name is Vincent DiGiovanni</h2>
                    </div>
                    <div data-aos='flip-left' data-aos-delay='1000' className='flex justify-between pt-6 max-w-[100px]'>
                        <a href="https://www.linkedin.com/in/vincentdigi/">
                            <FaLinkedinIn className='cursor-pointer hover:scale-125 ease-in duration-100' size={30} />
                        </a>
                        <a href="https://github.com/vdigi00">
                            <FaGithub className='cursor-pointer hover:scale-125 ease-in duration-100' size={30} />
                        </a>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='1500' data-aos-anchor-placement="top" className='flex flex-col items-center mt-auto mb-4'>
                    Scroll to learn more
                    <IconContext.Provider value={{ color: "#003c9c" }}>
                        <RiArrowDownWideFill size={70}/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}
export default Hero