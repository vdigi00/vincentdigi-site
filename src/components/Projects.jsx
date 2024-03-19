import React from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-100 min-h-[50em] cursor-default'>
            <div className='max-w-[1000px] m-auto px-8'>
                <h1 data-aos='fade-right' data-aos-delay='500'>Projects:</h1>
                <div className='text-xl outline outline-1'>
                    <h3>Personal Website</h3>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src='/images/projects/web1.jpg' /></div>
                            <div class="swiper-slide"><img src='/images/projects/web2.jpg' /></div>
                            <div class="swiper-slide"><img src='/images/projects/web3.jpg' /></div>
                        </div>  
                        <div class="swiper-pagination"></div>

                        <div class="swiper-button-prev"></div>  
                        <div class="swiper-button-next"></div>

                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>
                <h2>Other:</h2>
                <div className='text-xl outline outline-1'>
                    <h3>Fuzz Pedal</h3>
                    <div>

                    </div>
                </div>
                <div className='text-xl outline outline-1'>
                    <h3>3D Printed Planes</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects