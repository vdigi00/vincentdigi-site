import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    
    return (
        <div>
           <AiOutlineMenu onClick={ handleNav } className='absolute top-8 right-8 z-[99] scale-150 md:hidden' />
            {
                nav ? (
                        <div className='fixed w-full h-screen bg-white/20 flex flex-col justify-center items-center z-20'> 
                            <a href="#main" 
                            className='w-[30%] flex justify-center items-center rounded shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineHome size={20} />
                                <span className='pl-4'>Home</span>
                            </a>
                            <a href="#main" 
                            className='w-[30%] flex justify-center items-center rounded-lg shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineProject size={20} />
                                <span className='pl-4'>Projects</span>
                            </a>
                            <a href="#main" 
                            className='w-[30%] flex justify-center items-center rounded-lg shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <BsPerson size={20} />
                                <span className='pl-4'>Resume</span>
                            </a>
                            <a href="#main" 
                            className='w-[30%] flex justify-center items-center rounded-lg shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineMail size={20} />
                                <span className='pl-4'>Contact</span>
                            </a>
                        </div>
                )
                : (
                    ''
                )
            }
        </div>
    );
};

export default Sidenav;