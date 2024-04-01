import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-100 min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto px-8'>
                <h1 data-aos='fade-right' data-aos-delay='500'>Projects:</h1>
                <div className='text-xl'>
                    <h3>Personal Website</h3>
                    <swiper-container navigation='true' pagination='true'>
                        <swiper-slide><img src='/images/projects/web1.jpg' alt='Personal Website, Desktop Home Screen'></img></swiper-slide>
                        <swiper-slide><img src='/images/projects/web2.jpg' alt='Personal Website, Mobile Responsiveness, Home Screen'></img></swiper-slide>
                        <swiper-slide><img src='/images/projects/web3.jpg' alt='Personal Website, Mobile Responsiveness, Navigation menu'></img></swiper-slide>
                    </swiper-container>
                </div>
                <h2>Other:</h2>
                <div className='text-xl'>
                    <h3>Fuzz Pedal</h3>
                    <div>
                    </div>
                </div>
                <div className='text-xl'>
                    <h3>3D Printed Planes</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects