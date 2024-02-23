import React from 'react';

const linkData = [
    { text: 'Git' },
    { text: 'VMWare' },
    { text: 'Bash' },
    { text: 'Python' },
    { text: 'Java' },
    { text: 'JavaScript' },
    { text: 'Vite' }
]

const Skills = () => {
    return (
        <div id='skills' className='min-h-[50em]'>
            <div className='max-w-[1000px] m-auto md:pl-20 p-4 py-16 '>
                <h1 className='text-4xl font-bold'>Skills & Interests:</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {linkData.map((link, index) => (
                    <div key={index} className={`border`}>
                        {link.text}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills