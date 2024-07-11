import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiArrowDownWideFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <div id='hero'>
            <img className='w-full h-screen object-cover' src='/images/cover.jpg' alt='Space Background' loading=" lazy" />
            <div className='m-auto w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center bg-black/60 cursor-default'>
                <div className='absolute flex flex-col justify-center grow text-white'>
                    <div data-aos='fade-right'>
                        <h1 className='lg:text-8xl md:text-7xl text-6xl text-center hero-text'>Welcome</h1>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='500' className='py-4 hero-text'>    
                        <h2 className='lg:text-2xl md:text-xl text-center'>My name is Vincent DiGiovanni</h2>
                    </div>
                    <div data-aos='flip-left' data-aos-delay='1000' className='flex justify-evenly py-4'>
                        <a href="https://www.linkedin.com/in/vincentdigi/">
                            <FaLinkedin className='cursor-pointer hover:scale-125 ease-in duration-100 hero-drop' size={40} />
                        </a>
                        <a href="https://github.com/vdigi00">
                            <FaGithub className='cursor-pointer hover:scale-125 ease-in duration-100 hero-drop' size={40} />
                        </a>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='1500' data-aos-anchor-placement="top" className='flex flex-col items-center mt-auto mb-4 text-white hero-text'>
                    <p>Scroll to learn more</p>
                    <a className='hero-drop'>    
                        <RiArrowDownWideFill size={60} color="white"/>    
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
export default Hero