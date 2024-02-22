import React from 'react'

const linkData = [
    { href: '#hero', text: 'Home' },
    { href: '#main', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact' },
]

const TopNav = () => {
    return (
        <nav className='fixed w-full invisible lg:visible flex flex-nowrap flex-row justify-center items-center z-[99] bg-white/60'>
            {linkData.map((link, index) => (
                <a key={index} className={`w-[8em] flex justify-center items-center mx-1 p-3 bg-white/80 ${link.className}`} href={link.href}>
                    {link.text}
                </a>
            ))}
        </nav>
    )
}

export default TopNav