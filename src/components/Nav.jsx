import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

const Icon = ({ type }) => {
    switch (type) {
        case 'home':
            return <AiOutlineHome />;
        case 'project':
            return <AiOutlineProject />;
        case 'mail':
            return <AiOutlineMail />;
        case 'person':
            return <BsPerson />;
        default:
            return null;
    }
}

const linkData = [
    { href: '#hero', text: 'Home', icon: 'home' },
    { href: '#main', text: 'About', },
    { href: '#projects', text: 'Projects', icon: 'project' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact', icon: 'mail' },
]

const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <div>
           <AiOutlineMenu onClick={ handleNav } className='fixed top-8 right-8 z-[99] lg:hidden' size={30} />
            {
                nav ? (
                    <div className='visible lg:invisible fixed w-full h-screen bg-white/40 flex flex-col justify-center items-center z-20'> 
                        {linkData.map((link, index) => (
                            <a key={index} className={`sm:w-[30%] w=[20%] flex justify-center items-center rounded-lg shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200`} href={link.href}>
                                <Icon type={link.icon} size={20} />
                                <span className='pl-4'>{link.text}</span>
                            </a>
                        ))}
                    </div>
                )
                : (
                    <nav className='fixed w-full invisible lg:visible flex flex-nowrap flex-row justify-center items-center z-[99] bg-white/60'>
                        {linkData.map((link, index) => (
                        <a key={index} className={`w-[8em] flex justify-center items-center mx-1 p-3 bg-white/80 hover:bg-gray-200`} href={link.href}>
                            {link.text}
                        </a>
                        ))}
                    </nav>
                )
            }
        </div>
    )
}

export default Nav