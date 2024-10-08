import { useState } from 'react';

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Toggle dropdown and chevron on SVG click
	const handleToggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className='flex flex-row justify-between items-center px-5 py-3 select-none'>
			<h1 className='font-bold text-2xl'>
				<span className='text-sky-600'>Scots</span>Farm
			</h1>

			<nav className='flex flex-row gap-x-8 items-center transition-all duration-300 text-lg'>
				<a
					href='/'
					className='hover:scale-110 transition-all duration-300'
				>
					Home
				</a>

				{/* Parent container for "About us" and the dropdown */}
				<div className='relative'>
					<div
						className='flex flex-row items-center cursor-pointer hover:scale-110 transition-all duration-300'
						onClick={handleToggleDropdown}
					>
						<a href='/about-us' className='flex flex-row items-center'>
							About us
						</a>
						{/* Toggle between chevron down and chevron left */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`size-4 mt-1 ml-1 transition-transform duration-300 ${
								isDropdownOpen ? 'rotate-90' : ''
							}`}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m19.5 8.25-7.5 7.5-7.5-7.5'
							/>
						</svg>



					</div>

					{/* Dropdown, stays open based on click */}
					{isDropdownOpen && (
						<div className='absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-md z-50 transition-all duration-300'>
							<a
								href='/our-history'
								className='block px-4 py-2 hover:bg-sky-100 transition-all duration-200'
							>
								Cafe
							</a>
							<a
								href='/our-mission'
								className='block px-4 py-2 hover:bg-sky-100 transition-all duration-200'
							>
								Our Mission
							</a>
							<a
								href='/meet-the-team'
								className='block px-4 py-2 hover:bg-sky-100 transition-all duration-200'
							>
								Meet the Team
							</a>
						</div>
					)}
				</div>

				<a
					href='/visit-us'
					className='hover:scale-110 transition-all duration-300'
				>
					Visit us
				</a>
				<a
					href='/contact'
					className='bg-sky-600 text-white p-1 rounded-3xl px-2 hover:scale-110 transition-all duration-300'
				>
					Contact us
				</a>
			</nav>
		</div>
	);
};

export default Header;
