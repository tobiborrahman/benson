'use client';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="mb-[185px] md:mb-[30px] sm:mb-[20px]">
			<div className="max-w-[1149px] bg-[#FFFFFF] border-default rounded-[30px] mx-auto mt-[22px] px-[20px] sm:mx-5 md:mx-5">
				<nav className="flex justify-between items-center h-[90px]">
					<div>
						<Image
							src="/assets/images/logo.svg"
							alt="logo image"
							width={137}
							height={43}
						/>
					</div>

					{/* Desktop Navigation Links */}
					<div className="sm:hidden md:hidden flex items-center gap-[10.5px]">
						<a
							href="#"
							className="p-[10px] bg-[#2AA6EE] rounded-[12px]"
						>
							<Image
								src="assets/images/telegram.svg"
								alt="telegram logo"
								width={30}
								height={30}
							/>
						</a>
						<a
							href="#"
							className="p-[10px] bg-primary rounded-[12px]"
						>
							<Image
								src="assets/images/twitter.svg"
								alt="twitter logo"
								width={31.17}
								height={28.17}
							/>
						</a>
						<a href="#" className="button-primary py-2">
							Buy $BENSON
						</a>
					</div>

					{/* Mobile Navigation Menu */}
					{isOpen && (
						<div
							className={`absolute top-0 left-0 w-full bg-[#f0f0f0] shadow-md py-10 duration-1000 ease-in-out ${
								isOpen ? 'translate-y-0' : '-translate-x-full'
							}`}
						>
							<ul className={`flex flex-col items-center gap-4`}>
								<a
									href="#"
									className="p-[10px] bg-[#2AA6EE] rounded-[12px]"
								>
									<Image
										src="assets/images/telegram.svg"
										alt="telegram logo"
										width={30}
										height={30}
									/>
								</a>

								<a
									href="#"
									className="p-[10px] bg-primary rounded-[12px]"
								>
									<Image
										src="assets/images/twitter.svg"
										alt="twitter logo"
										width={31.17}
										height={28.17}
									/>
								</a>

								<a href="#" className="button-primary py-2">
									Buy $BENSON
								</a>
							</ul>
						</div>
					)}

					{/* Mobile Hamburger Menu Button */}
					<div className="hidden sm:block md:block z-[9999]">
						<button onClick={toggleMenu}>
							{isOpen ? (
								<svg
									className="w-6 md:w-10 h-6 md:h-10"
									fill="none"
									stroke="black"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							) : (
								<svg
									className="w-6 md:w-10 h-6 md:h-10"
									fill="none"
									stroke="black"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							)}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
