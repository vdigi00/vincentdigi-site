import React from 'react';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaLinux, FaWindows, FaServer, FaGitAlt, FaDraftingCompass, FaMusic, FaGuitar, FaHiking } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiSolderingIron } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoBarbell } from "react-icons/io5";
import { SiGnubash, SiCsharp, SiJavascript, SiVite, SiTailwindcss, SiMicrosoftazure } from "react-icons/si";

const skills = [
    { icon: <SiGnubash />, name: 'Bash' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiVite />, name: 'Vite' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
];
  
const tools = [
    { icon: <FaLinux />, name: 'Linux/UNIX' },
    { icon: <FaWindows />, name: 'Windows' },
    { icon: <FaServer />, name: 'Windows Server' },
    { icon: <GrVmware />, name: 'Virtualization' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiMicrosoftazure />, name: 'Azure' },
];
  
const interests = [
    { icon: <GiSolderingIron />, name: 'Soldering' },
    { icon: <HiMiniWrenchScrewdriver />, name: 'Electronics Repair' },
    { icon: <FaDraftingCompass />, name: 'CAD' },
    { icon: <img src='/images/printer.svg' className='w-[25px] lg:w-[35px] h-auto' loading="lazy" />, name: '3D Printing' },
    { icon: <FaMusic />, name: 'Music' },
    { icon: <FaGuitar />, name: 'Guitar' },
    { icon: <FaTent />, name: 'Camping' },
    { icon: <FaHiking />, name: 'Hiking' },
    { icon: <IoBarbell />, name: 'Fitness' },
];
  
const SkillItem = ({ icon, name }) => (
    <div data-aos='fade-in' className='skills-item'>
        <a href='#projects' className='skills-content'>
            <div className='icon'>
                {icon}
            </div>
            <span className='pl-3'>{name}</span>
        </a>
    </div>
);

const SkillsSection = ({ skills }) => (
    <div data-aos-delay='500' className='flex flex-wrap justify-center gap-4 lg:text-xl text-lg'>
        {skills.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} name={skill.name} />
        ))}
    </div>
);

const Skills = () => {
    return (
        <section id='skills'>
            <div className='m-auto max-w-[1000px] p-8'>
                <h1 data-aos='fade-right' className='pb-8 underline'>Skills</h1>
                <h2 data-aos='fade-right' className='pb-8'>Languages & Frameworks:</h2>
                <SkillsSection skills={skills} />
                <h2 data-aos='fade-right' className='py-8'>Tools & Operating Systems:</h2>
                <SkillsSection skills={tools} />
                <h1 data-aos='fade-right' className='py-8 underline'>Interests</h1>
                <SkillsSection skills={interests} />
            </div>
        </section>
    )
};

export default Skills;