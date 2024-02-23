import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em]'>
            <div className='max-w-[1000px] m-auto md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold'>Skills & Interests:</h1>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='border'>
                        Git
                    </div>
                    <div className='border'>
                        VMWare
                    </div>
                    <div className='border'>
                        Bash
                    </div>
                    <div className='border'>
                        Python
                    </div>
                    <div className='border'>
                        Java
                    </div>
                    <div className='border'>
                        JavaScript
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills