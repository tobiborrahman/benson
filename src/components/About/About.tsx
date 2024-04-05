import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className="mb-[128px] md:mb-0 sm:mb-0">
			<div className="max-w-[1355px] mx-auto pt-[43px] pb-[46px]">
				<div>
					<h1 className="pb-[67px] md:pb-[50px] sm:pb-[30px]">
						What is $BENSON?
					</h1>

					<div className="flex md:flex-col sm:flex-col items-start ml-[275px] md:ml-0 sm:ml-0">
						<div className="max-w-[805px] mx-auto bg-[#FFFFFF] border-default">
							<div className=" px-[47px] py-[17px]">
								<p className="text-[20px] leading-[32px] font-primary text-[#000000] text-center">
									Olivia Benson, Taylor Swifts adopted
									Scottish Fold cat and the SECOND richest cat
									in the world with a net worth of $97 million
									dollars is now on Base, but there’s one
									problem..
								</p>
								<p className="text-[20px] leading-[32px] font-primary text-[#000000] pt-10 text-center">
									Nala, the richest cat, stands in the way.
								</p>
							</div>
						</div>

						<div>
							<div className="md:ml-[250px] sm:ml-0">
								<Image
									src="assets/images/cat-banner.svg"
									alt="banner img"
									width={351}
									height={350}
								/>
							</div>
						</div>
					</div>

					<div className="flex justify-center items-center mt-[-50px] md:mt-[0px]">
						<button className="button-primary !w-[208px] !h-[68px] pt-4 pb-5">
							Buy $BENSON
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
