const header = () => {
	return (
		<div className='flex flex-row justify-between items-center px-5 py-3 select-none'>
			<h1 className='font-bold text-2xl'>
				<span className='text-sky-600'>Scots</span>Farm
			</h1>

			<nav className='flex flex-row gap-x-8 items-center transition-all duration-300 text-lg'>
				<a href='/' className="hover:scale-110 transition-all duration-300">Home</a>
				<a href='/' className="hover:scale-110 transition-all duration-300">About us</a>
				<a href='/' className="hover:scale-110 transition-all duration-300">Visit us</a>
				<a href='/' className='bg-sky-600 text-white p-1 rounded-3xl px-2 hover:scale-110 transition-all duration-300'>
					Contact us
				</a>
			</nav>
		</div>
	);
};

export default header;
