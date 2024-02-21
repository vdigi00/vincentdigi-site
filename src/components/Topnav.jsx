import React from 'react'

const TopNav = () => {    
    return (
            <nav className='fixed w-full flex flex-nowrap flex-row justify-center items-center z-[99] border border-black'>
            <a className='w-[8em] flex justify-center items-center m-2 p-3 border border-black'>
                Test 1
            </a>
            <a className='w-[8em] flex justify-center items-center m-2 p-3 border border-black'>
                Test 2
            </a>
            <a className='w-[8em] flex justify-center items-center m-2 p-3 border border-black'>
                Test 3
            </a>
            <a className='w-[8em] flex justify-center items-center m-2 p-3 border border-black'>
                Test 4
            </a>
        </nav>
    )
}

export default TopNav