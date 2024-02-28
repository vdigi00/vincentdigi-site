import React from 'react';
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDraftingCompass } from "react-icons/fa";
import { SiGnubash, SiJavascript, SiVite, SiTailwindcss } from "react-icons/si";
import { GrVmware } from "react-icons/gr";
import { GiSolderingIron, GiGuitarHead } from "react-icons/gi";

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto md:px-6 p-4 py-16 '>
                <h1 className='lg:text-4xl text-3xl font-bold pb-6 font-LT-Hoop-Bold'>Skills:</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 lg:text-xl'>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaGitAlt size={35}/>
                        <span className='pl-3'>Git</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <GrVmware size={35} />
                        <span className='pl-3'>VMWare</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiGnubash size={35} />
                        <span className='pl-3'>Bash</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaPython size={35} />
                        <span className='pl-3'>Python</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaJava size={35} />
                        <span className='pl-3'>Java</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaHtml5 size={35} />
                        <span className='pl-3'>HTML</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaCss3Alt size={35} />
                        <span className='pl-3'>CSS</span>
                    </div> 
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiJavascript size={35} />
                        <span className='pl-3'>JavaScript</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiVite size={35} />
                        <span className='pl-3'>Vite</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiTailwindcss size={35} />
                        <span className='pl-3'>TailwindCSS</span>
                    </div>
                </div>
                <h1 className='lg:text-4xl text-3xl font-bold py-6 font-LT-Hoop-Bold'>Interests:</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 lg:text-xl'>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <GiSolderingIron size={35} />
                        <span className='pl-3 text-base'>Electronics Repair</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <GiGuitarHead size={35} />
                        <span className='pl-3'>Music & Guitar</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaDraftingCompass size={35} />
                        <span className='pl-3'>CAD</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <span className='pl-3'>3D Modeling</span>
                    </div>
                    <div className='border flex items-center align-middle justify-center p-3 cursor-pointer font-LT-Hoop-SemiBold'>
                        <span className='pl-3'>3D Printing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills