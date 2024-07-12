import React from 'react';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaLinux, FaWindows, FaServer, FaGitAlt, FaDraftingCompass, FaMusic, FaGuitar, FaHiking } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiSolderingIron } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoBarbell } from "react-icons/io5";
import { SiGnubash, SiCsharp, SiJavascript, SiVite, SiTailwindcss, SiMicrosoftazure } from "react-icons/si";

const Skills = () => {
    function adjustFontSizes() {
        const skillsItems = document.querySelectorAll('.skills-item');
    
        skillsItems.forEach(item => {
            const content = item.querySelector('.skills-content');
            const textSpan = content.querySelector('span');
    
            // Reset font size to default to calculate properly
            textSpan.style.fontSize = '';
    
            const containerWidth = content.clientWidth;
            let fontSize = parseInt(window.getComputedStyle(textSpan).fontSize);
    
            textSpan.style.fontSize = fontSize + 'px';
    
            // Decrease font size until text fits within container
            while (textSpan.scrollWidth > containerWidth) {
                fontSize -= 1;
                textSpan.style.fontSize = fontSize + 'px';
            }
        });
    }
    
    window.addEventListener('resize', adjustFontSizes);
    window.addEventListener('load', adjustFontSizes);
    
    // Call adjustFontSizes initially to set font sizes on page load
    adjustFontSizes();
    return (
        <div id='skills' className='cursor-default'>
            <div className='m-auto max-w-[1000px] p-8'>
                <h1 data-aos='fade-right' className='pb-8 underline'>Skills</h1>
                <h2 data-aos='fade-right' className='pb-8'>Languages & Frameworks:</h2>
                <div data-aos-delay='500' className='flex flex-wrap justify-center gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <SiGnubash size={35} />
                            <span className='pl-3'>Bash</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaPython size={35} />
                            <span className='pl-3'>Python</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaJava size={35} />
                            <span className='pl-3'>Java</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <SiCsharp size={35} />
                            <span className='pl-3'>C#</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'> 
                        <a href='#projects' className='skills-content'>
                            <SiJavascript size={35} />
                            <span className='pl-3'>JavaScript</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaReact size={35} />
                            <span className='pl-3'>React</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <SiVite size={35} />
                            <span className='pl-3'>Vite</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaHtml5 size={35} />
                            <span className='pl-3'>HTML</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaCss3Alt size={35} />
                            <span className='pl-3'>CSS</span>
                        </a>
                    </div>

                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <SiTailwindcss size={35} />
                            <span className='pl-3'>TailwindCSS</span>
                        </a>
                    </div>
                </div>
                <h2 data-aos='fade-right' className='py-8'>Tools & Operating Systems:</h2>
                <div data-aos-delay='500' className='flex flex-wrap justify-center gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaLinux size={35} />
                            <span className='pl-3'>Linux/UNIX</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaWindows size={35} />
                            <span className='pl-3'>Windows</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaServer size={35} />
                            <span className='pl-3'>Windows Server</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <GrVmware size={35} />
                            <span className='pl-3'>Virtualization</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <FaGitAlt size={35}/>
                            <span className='pl-3'>Git</span>
                        </a>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <a href='#projects' className='skills-content'>
                            <SiMicrosoftazure size={35} />
                            <span className='pl-3'>Azure</span>
                        </a>
                    </div>
                </div>
                <h1 data-aos='fade-right' className='py-8 underline'>Interests</h1>
                <div data-aos-delay='500' className='flex flex-wrap justify-center lg:gap-6 gap-4 lg:text-xl text-lg'>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <GiSolderingIron size={35} />
                            <span className='pl-3'>Soldering</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <HiMiniWrenchScrewdriver size={35} />
                            <span className='pl-3'>Electronics Repair</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <FaDraftingCompass size={35} />
                            <span className='pl-3'>CAD</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <img src='/images/printer.svg' className='w-[35px] h-auto' loading=" lazy" />
                            <span className='pl-3'>3D Printing</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <FaMusic size={35} />
                            <span className='pl-3'>Music</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <FaGuitar size={35} />
                            <span className='pl-3'>Guitar</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <FaTent size={35} />
                            <span className='pl-3'>Camping</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
                            <FaHiking size={35} />
                            <span className='pl-3'>Hiking</span>
                        </div>
                    </div>
                    <div data-aos='fade-in' className='skills-item'>
                        <div className='skills-content'>
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