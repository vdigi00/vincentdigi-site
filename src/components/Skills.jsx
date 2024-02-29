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
                <h1 className='lg:text-4xl text-3xl pb-6 font-LT-Hoop-Bold'>Skills:</h1>
                <div className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaGitAlt size={35}/>
                        <span className='pl-3'>Git</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <GrVmware size={35} />
                        <span className='pl-3'>VMWare</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <SiGnubash size={35} />
                        <span className='pl-3'>Bash</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaPython size={35} />
                        <span className='pl-3'>Python</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaJava size={35} />
                        <span className='pl-3'>Java</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaHtml5 size={35} />
                        <span className='pl-3'>HTML</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaCss3Alt size={35} />
                        <span className='pl-3'>CSS</span>
                    </div> 
                    <div data-aos='fade-up' class='skills-item'>
                        <SiJavascript size={35} />
                        <span className='pl-3'>JavaScript</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <SiVite size={35} />
                        <span className='pl-3'>Vite</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <SiTailwindcss size={35} />
                        <span className='pl-3'>TailwindCSS</span>
                    </div>
                </div>
                <h1 className='lg:text-4xl text-3xl font-bold py-6 font-LT-Hoop-Bold'>Interests:</h1>
                <div className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-up' class='skills-item'>
                        <GiSolderingIron size={35} />
                        <span className='pl-3'>Soldering</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <HiMiniWrenchScrewdriver size={35} />
                        <span className='pl-3 text-base'>Electronics Repair</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaDraftingCompass size={35} />
                        <span className='pl-3'>CAD</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <img src='../src/assets/images/printer.svg' className='w-8 h-auto'></img>
                        <span className='pl-3'>3D Printing</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaMusic size={35} />
                        <span className='pl-3'>Music</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaGuitar size={35} />
                        <span className='pl-3'>Guitar</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaTent size={35} />
                        <span className='pl-3'>Camping</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <FaHiking size={35} />
                        <span className='pl-3'>Hiking</span>
                    </div>
                    <div data-aos='fade-up' class='skills-item'>
                        <IoBarbell size={35} />
                        <span className='pl-3'>Fitness</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills