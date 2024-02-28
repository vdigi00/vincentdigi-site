import React from 'react';
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDraftingCompass, FaMusic, FaGuitar, FaHiking } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiSolderingIron } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoBarbell } from "react-icons/io5";
import { SiGnubash, SiJavascript, SiVite, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto md:px-6 p-4 py-16 '>
                <h1 className='lg:text-4xl text-3xl font-bold pb-6 font-LT-Hoop-Bold'>Skills:</h1>
                <div className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaGitAlt size={35}/>
                        <span className='pl-3'>Git</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <GrVmware size={35} />
                        <span className='pl-3'>VMWare</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiGnubash size={35} />
                        <span className='pl-3'>Bash</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaPython size={35} />
                        <span className='pl-3'>Python</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaJava size={35} />
                        <span className='pl-3'>Java</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaHtml5 size={35} />
                        <span className='pl-3'>HTML</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaCss3Alt size={35} />
                        <span className='pl-3'>CSS</span>
                    </div> 
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiJavascript size={35} />
                        <span className='pl-3'>JavaScript</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiVite size={35} />
                        <span className='pl-3'>Vite</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <SiTailwindcss size={35} />
                        <span className='pl-3'>TailwindCSS</span>
                    </div>
                </div>
                <h1 className='lg:text-4xl text-3xl font-bold py-6 font-LT-Hoop-Bold'>Interests:</h1>
                <div className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <GiSolderingIron size={35} />
                        <span className='pl-3'>Soldering</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer text-base font-LT-Hoop-SemiBold'>
                        <HiMiniWrenchScrewdriver size={35} />
                        <span className='pl-3'>Electronics Repair</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaDraftingCompass size={35} />
                        <span className='pl-3'>CAD</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <img src='../src/assets/images/printer.svg' className='w-8 h-auto'></img>
                        <span className='pl-3'>3D Printing</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaMusic size={35} />
                        <span className='pl-3'>Music</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaGuitar size={35} />
                        <span className='pl-3'>Guitar</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaTent size={35} />
                        <span className='pl-3'>Camping</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <FaHiking size={35} />
                        <span className='pl-3'>Hiking</span>
                    </div>
                    <div className='border flex lg:basis-skills-lg md:basis-skills-md basis-skills-sm items-center align-middle justify-center p-4 cursor-pointer font-LT-Hoop-SemiBold'>
                        <IoBarbell size={35} />
                        <span className='pl-3'>Fitness</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills