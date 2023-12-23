import React from 'react'

const Navbar = () => {
	return (
		<header className='flex justify-between items-center navbar'>
			<ul className='flex'>
				<li>Home</li>
				<li>Resume</li>
				<li>Personal Projects</li>
				<li>Contact</li>
			</ul>
			<h1>Vincent DiGiovanni</h1>
		</header>
	);
}

export default Navbar