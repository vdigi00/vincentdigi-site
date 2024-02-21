import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Hero = () => {
    return (
        <div id='hero'>
            <img className='w-full h-screen object-cover' src='../src/assets/images/Space.jpg' alt='Space Background'></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/80'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center sm:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-grey-800'>Welcome</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-grey-800'>My name is Vincent DiGiovanni</h2>
                    <div className='flex justify-between pt-6 max-w-[100px] w-full'>
                        <FaLinkedinIn className='cursor-pointer' size={30} />
                        <FaGithub className='cursor-pointer' size={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero