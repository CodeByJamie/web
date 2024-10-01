"use client";
import Image from "next/image";
import Header from "./components/header";
import * as motion from "framer-motion/client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const handleImageClick = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<section className='relative flex items-center justify-center h-screen'>
				<div
					className='absolute top-0 left-0 mt-16 cursor-pointer'
					onClick={handleImageClick}
				>
					<Image
						src={"/coo.png"}
						width={100}
						height={100}
						alt='Coo Image'
						className='rounded-tr-xl rounded-br-xl hover:scale-110 transition-all duration-200'
					/>
				</div>
				<div className='relative flex flex-row p-4 w-full px-8 -mt-64'>
					<div className='flex flex-col'>
						<span className='font-bold text-4xl'>
							Welcome to{" "}
							<span className='text-sky-600'>Scots</span>
							Farm
						</span>
						<span className='text-center text-zinc-400 font-bold opacity-50'>
							Connecting the Highlands Together
						</span>
					</div>
				</div>
			</section>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
					>
						<motion.div className="relative">

						<motion.div className="absolute w-5 h-5 bg-red-500 top-0 right-0 z-10 rounded-xl"/>

							<motion.div
								className='flex flex-row bg-white rounded-lg p-6 items-center text-justify'
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								onClick={(e) => e.stopPropagation()}
							>
								<motion.div className='flex flex-col items-center'>
									<Image
										src={"/coo.png"}
										width={300}
										height={300}
										alt='Coo Image'
										className='border-r-2 pr-5'
									/>
									<span className='font-bold py-2'>
										Highland Coo
									</span>
								</motion.div>
								<span className='px-4 text-xl max-w-[600px]'>
									Highland coos, or Highland cattle, are a
									striking breed known for their long, shaggy
									hair and distinctive curved horns.
									Originating from the Scottish Highlands,
									these hardy cattle are well adapted to
									rugged terrains and harsh weather, making
									them a resilient choice for farmers in
									challenging environments.
								</span>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
