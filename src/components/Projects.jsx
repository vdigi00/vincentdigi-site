import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='bg-gray-100 cursor-default'>
            <div className='m-auto max-w-[1000px] p-8'>
                <h1 data-aos='fade-right' className='pb-8 underline'>Projects</h1>
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl pb-5'>
                    <h3 className='text-2xl font-MADE-TOMMY-Medium'>C# Scheduling Tool</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc'>
                            <li> I was recently selected to create the schedule for the Recreation Staff at Hale-Andrews Student Life Center</li>
                            <li>Previously, this task was completed by hand, I wanted to use Object-Oriented Programming to create a tool that would assist in the creation of the schedule</li>
                            <li>I am planning on creating a UI for this program in the future</li>
                            <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/slcschedule'>View GitHub Repository</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl py-5'>
                    <h3 className='text-2xl font-MADE-TOMMY-Medium'>Personal Website</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc'>
                            <li>This site was developed using Vite/React, JavaScript, HTML, CSS, and TailwindCSS</li>
                            <li>Accessible and Responsive design for ease of access and high-quality experience</li>
                            <li>Hosted on an AWS EC2 Linux Instance</li>
                            <li>More content, changes, and optimizations coming soon...</li>
                            <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/vincentdigi-site'>View GitHub Repository</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl py-5'>
                    <h3 className='text-2xl font-MADE-TOMMY-Medium'>Network Load Balancer</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc'>
                            <li>Created a Content Delivery Network by configuring a Domain Controller and a Network Load Balancing Cluster</li>
                            <li>Configured a Domain Controller with Active Directory and DNS, two Load Balancing Hosts, and four client machines</li>
                            <li>Wrote a Python script to compute Load Balancing Cluster website response metrics</li>
                            <li>Ran multiple experiments using varying Load Balancing Cluster configurations and wrote results report</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div data-aos='fade-left' data-aos-delay='500' className='text-xl py-5'>
                    <h3 className='text-2xl font-MADE-TOMMY-Medium'>Packet Analysis Tool</h3>
                    <ul className='my-5 ml-8 list-disc'>
                        <li>Developed a Network Packet Analysis Tool using Python</li>
                        <li>Filtered Network Packet Captures, parsed hexadecimal data, and computed metrics</li>
                        <li>Computed per node, including Echo Reply and Request data, time, and distance metrics</li>
                        <li>Effectively worked as a team to complete all three tasks on a schedule</li>
                        <li><a className='text-blue-500 underline' href='https://github.com/vdigi00/PacketAnalysis'>View GitHub Repository</a></li>
                    </ul>
                </div>
                {/*<div data-aos='fade-right' data-aos-delay='500' className='text-xl py-5'>
                    <h3 className='text-2xl py-5 font-MADE-TOMMY-Medium'>Fuzz Pedal</h3>
                    <div className='flex-none lg:flex'>
                        <ul className='my-5 ml-8 list-disc flex-1'>
                            <li>Replica of Gibson Maestro Fuzz-Tone FZ-1A from 1966</li>
                            <li>Hand soldered components on perforated board</li>
                            <li>Designed enclosure using AutoDesk Inventor</li>
                            <li>3D Printed using Creality Ender-3 V2</li>
                        </ul>
                    </div>
                </div>
                <div className='text-xl'>
                    <h3>3D Printed Planes</h3>
                </div>*/}
            </div>
        </div>
    )
}

export default Projects