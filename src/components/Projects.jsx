import React from 'react';

const Projects = () => {
    return (
        <section id='projects'>
            <div className='m-auto max-w-[1000px] p-8 text-white'>
                <h1 data-aos='fade-right' className='pb-8 underline underline-offset-8'>Projects</h1>
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl pb-6'>
                    <h3>C# Scheduling Tool</h3>
                    <ul className='ml-8 list-disc'>
                        <li> I was recently selected to create the schedule for the Recreation Staff at Hale-Andrews Student Life Center</li>
                        <li>Previously, this task was completed by hand, I wanted to use Object-Oriented Programming to create a tool that would assist in the creation of the schedule</li>
                        <li>I am planning on creating a UI for this program in the future</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/slcschedule'>View GitHub Repository</a></li>
                    </ul>
                </div>
                <hr data-aos='zoom-in' data-aos-anchor-placement="top-bottom" />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl py-6'>
                    <h3>Personal Website</h3>
                    <ul className='ml-8 list-disc'>
                        <li>This site was developed using Vite/React, JavaScript, HTML, CSS, and TailwindCSS</li>
                        <li>Accessible and Responsive design for ease of access and high-quality experience</li>
                        <li>Hosted on an AWS EC2 Linux Instance</li>
                        <li>More content, changes, and optimizations coming soon...</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/vincentdigi-site'>View GitHub Repository</a></li>
                    </ul>
                </div>
                <hr data-aos='zoom-in' data-aos-anchor-placement="top-bottom" />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl py-6'>
                    <h3>Network Load Balancer</h3>
                    <ul className='ml-8 list-disc'>
                        <li>Created a Content Delivery Network by configuring a Domain Controller and a Network Load Balancing Cluster</li>
                        <li>Configured a Domain Controller with Active Directory and DNS, two Load Balancing Hosts, and four client machines</li>
                        <li>Wrote a Python script to compute Load Balancing Cluster website response metrics</li>
                        <li>Ran multiple experiments using varying Load Balancing Cluster configurations and wrote results report</li>
                    </ul>
                </div>
                <hr data-aos='zoom-in' data-aos-anchor-placement="top-bottom" />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl pt-6'>
                    <h3>Packet Analysis Tool</h3>
                    <ul className='ml-8 list-disc'>
                        <li>Developed a Network Packet Analysis Tool using Python</li>
                        <li>Filtered Network Packet Captures, parsed hexadecimal data, and computed metrics</li>
                        <li>Computed per node, including Echo Reply and Request data, time, and distance metrics</li>
                        <li>Effectively worked as a team to complete all three tasks on a schedule</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/PacketAnalysis'>View GitHub Repository</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Projects;