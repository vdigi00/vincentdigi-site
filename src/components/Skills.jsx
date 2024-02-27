import React from 'react';
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiGnubash, SiJavascript, SiVite, SiTailwindcss } from "react-icons/si";
import { GrVmware } from "react-icons/gr";

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold pb-6'>Skills & Interests:</h1>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <FaGitAlt size={30} />
                        <span className='pl-3'>Git</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <GrVmware size={30} />
                        <span className='pl-3'>VMWare</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <SiGnubash size={30} />
                        <span className='pl-3'>Bash</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <FaPython size={30} />
                        <span className='pl-3'>Python</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <FaJava size={30} />
                        <span className='pl-3'>Java</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <SiJavascript size={30} />
                        <span className='pl-3'>JavaScript</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <SiVite size={30} />
                        <span className='pl-3'>Vite</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <SiTailwindcss size={30} />
                        <span className='pl-3'>TailwindCSS</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <FaHtml5 size={30} />
                        <span className='pl-3'>HTML</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer'>
                        <FaCss3Alt size={30} />
                        <span className='pl-3'>CSS</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Skills