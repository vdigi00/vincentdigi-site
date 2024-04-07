import { React, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <div id='nav'> 
            <AiOutlineMenu onClick={ handleNav } className='fixed top-8 right-8 z-[99] lg:hidden' size={30} />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-gray-300/50 flex flex-col justify-center items-center z-20'>
                        <a onClick={ handleNav } className='mobile-nav' href='#home'>
                            Home
                        </a>
                        <a onClick={ handleNav } className='mobile-nav' href='#about'>
                            About
                        </a>
                        <a onClick={ handleNav } className='mobile-nav' href='#projects'>
                            Projects
                        </a>
                        <a onClick={ handleNav } className='mobile-nav' href='#skills'>
                            Skills
                        </a>
                        {/*<a onClick={ handleNav } className='mobile-nav' href='#contact'>
                            Contact
                        </a>*/}
                    </div>
                )
                : (
                    <nav className='fixed w-full invisible lg:visible flex flex-nowrap flex-row justify-center items-center z-[99] bg-slate-800/70'>
                        <a className='desktop-nav' href='#home'>
                            Home
                        </a>
                        <a className='desktop-nav' href='#about'>
                            About
                        </a>
                        <a className='desktop-nav' href='#projects'>
                            Projects
                        </a>
                        <a className='desktop-nav' href='#skills'>
                            Skills
                        </a>
                        {/*<a className='desktop-nav' href='#contact'>
                            Contact
                        </a>*/}
                    </nav>
                )
            }
        </div>
    )
}

export default Nav