import React from 'react';
import { FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiVmware, SiGnubash, SiJavascript, SiVite, SiTailwindcss } from "react-icons/si";

const Icon = ({ type }) => {
    switch (type) {
        case 'git':
            return <FaGitAlt />;
        case 'vmware':
            return <SiVmware />;
        case 'bash':
            return <SiGnubash />;
        case 'python':
            return <FaPython />;
        case 'java':
            return <FaJava />;
        case 'javascript':
            return <SiJavascript />;
        case 'vite':
            return <SiVite />;
        case 'html':
            return <FaHtml5 />;
        case 'css':
            return <FaCss3Alt />;
        case 'tailwindcss':
            return <SiTailwindcss />;
        default:
            return null;
    }
}

const linkData = [
    { text: 'Git', icon: 'git' },
    { text: 'VMWare', icon: 'vmware' },
    { text: 'Bash', icon: 'bash' },
    { text: 'Python', icon: 'python' },
    { text: 'Java', icon: 'java' },
    { text: 'JavaScript', icon: 'javascript' },
    { text: 'Vite', icon: 'vite' },
    { text: 'TailwindCSS', icon: 'tailwindcss'},
    { text: 'HTML', icon: 'html'},
    { text: 'CSS', icon: 'css'}
]

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em]'>
            <div className='max-w-[1000px] m-auto md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold'>Skills & Interests:</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {linkData.map((link, index) => (
                        <div key={index} className={`border flex items-start align-middle p-3`}>
                            <Icon type={link.icon} />
                            <span className='pl-3'>{link.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills