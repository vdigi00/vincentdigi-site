import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Hero = () => {
    return (
        <div id='home'>
            <img className='w-full h-screen object-cover' src='/images/cover.jpg' alt='Space Background'></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/70 cursor-default'>
                <div className='flex max-w-[700px] m-auto h-full w-full flex-col justify-center lg:items-start items-center'>
                    <h1 data-aos='fade-right' className='font-MADE-TOMMY-Medium lg:text-8xl md:text-7xl text-6xl text-grey-800'>Welcome</h1>
                    <h2 data-aos='fade-right' data-aos-delay='500' className='font-MADE-TOMMY-Regular lg:text-2xl md:text-xl pt-4 text-grey-800'>My name is Vincent DiGiovanni</h2>
                    <div data-aos='flip-left' data-aos-delay='1000' className='flex justify-between pt-6 max-w-[100px] w-full'>
                        <a href="https://www.linkedin.com/in/vincentdigi/">
                            <FaLinkedinIn className='cursor-pointer hover:scale-125 ease-in duration-100' size={30} />
                        </a>
                        <a href="https://github.com/vdigi00">
                            <FaGithub className='cursor-pointer hover:scale-125 ease-in duration-100' size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero