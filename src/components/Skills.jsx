import React from 'react';
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDraftingCompass, FaMusic, FaGuitar, FaHiking, FaReact  } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiSolderingIron } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoBarbell } from "react-icons/io5";
import { SiGnubash, SiJavascript, SiVite, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto px-8'>
                <h1 data-aos='fade-right'>Skills:</h1>
                <div data-aos-delay='500' className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <FaGitAlt size={35}/>
                            <span className='pl-3'>Git</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <GrVmware size={35} />
                            <span className='pl-3'>VMWare</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <SiGnubash size={35} />
                            <span className='pl-3'>Bash</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <FaPython size={35} />
                            <span className='pl-3'>Python</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <FaJava size={35} />
                            <span className='pl-3'>Java</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <FaHtml5 size={35} />
                            <span className='pl-3'>HTML</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <FaCss3Alt size={35} />
                            <span className='pl-3'>CSS</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'> 
                        <a href='#projects' class='skills-item'>
                            <SiJavascript size={35} />
                            <span className='pl-3'>JavaScript</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <FaReact size={35} />
                            <span className='pl-3'>React</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <SiVite size={35} />
                            <span className='pl-3'>Vite</span>
                        </a>
                    </div>
                    <div data-aos='fade-in'>
                        <a href='#projects' class='skills-item'>
                            <SiTailwindcss size={35} />
                            <span className='pl-3'>TailwindCSS</span>
                        </a>
                    </div>
                </div>
                <h1 data-aos='fade-right'>Interests:</h1>
                <div data-aos-delay='500' className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <GiSolderingIron size={35} />
                            <span className='pl-3'>Soldering</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <HiMiniWrenchScrewdriver size={35} />
                            <span className='pl-3 text-base'>Electronics Repair</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <FaDraftingCompass size={35} />
                            <span className='pl-3'>CAD</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <img src='/images/printer.svg' className='w-9 h-auto'></img>
                            <span className='pl-3'>3D Printing</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <FaMusic size={35} />
                            <span className='pl-3'>Music</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <FaGuitar size={35} />
                            <span className='pl-3'>Guitar</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <FaTent size={35} />
                            <span className='pl-3'>Camping</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <FaHiking size={35} />
                            <span className='pl-3'>Hiking</span>
                        </div>
                    </div>
                    <div data-aos='fade-in'>
                        <div class='skills-item'>
                            <IoBarbell size={35} />
                            <span className='pl-3'>Fitness</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills