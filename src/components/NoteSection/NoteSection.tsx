import Image from 'next/image';
import React from 'react';

const NoteSection = () => {
	return (
		<div className="pb-[208px] md:pb-[50px] mb-[136px] md:mb-[100px] sm:mb-[50px]">
			<div className="max-w-[1355px] h-[1101px] mx-auto pt-[97px]">
				<h1 className="sm:text-[40px] sm:px-5">
					$BENSON Note to Anon Reader
				</h1>

				<div className="mt-[150px] sm:mt-[90px] ml-[400px] md:ml-0 sm:ml-0">
					<div className="relative sm:mx-5 md:ml-20">
						<div className="note-section md:ml-[200px]">
							<div>
								<Image
									className="absolute top-[220px] left-[-188px] sm:hidden"
									src="assets/images/cat-note-2.svg"
									alt="note image"
									width={300}
									height={300}
								/>
							</div>
							<div className="w-[572px] sm:w-full h-[444px] absolute top-0 left-0 bg-white border-default !rounded-[10px] cat1-shadow sm:hidden"></div>
							<div className="w-[572px] sm:w-full h-[444px] absolute top-0 left-0 bg-white border-default !rounded-[10px] cat2-shadow cat2-rotate sm:rotate-0 md:ml-[60px] sm:ml-0">
								<Image
									className="-mt-[73px] mb-2 foot-rotate"
									src="/assets/images/foot.png"
									alt="foot print img"
									width={128}
									height={131}
								/>
								<h1 className="!font-secondary text-[#000000] opacity-[70%]">
									Cat season is here!
								</h1>
								<h3 className="max-w-[413px] mx-auto text-center text-[35px] font-secondary leading-[32px] opacity-[70%] mt-[41px] text-[#000000] para-rotate sm:rotate-0">
									Are you swift enough to get #BASED with
									$BENSON ?
								</h3>
								<Image
									className="absolute right-5 bottom-5 foot-rotate"
									src="/assets/images/foot.png"
									alt="foot print img"
									width={128}
									height={131}
								/>
								<div className="z-[9999]">
									<Image
										className="absolute right-[-250px] md:right-[-200px] top-[50px] sm:hidden md:hidden md:w-[250px] md:h-[250px]"
										src="assets/images/cat-note-1.svg"
										alt="note image"
										width={300}
										height={300}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center mt-[-200px] sm:mt-[-400px]">
				<button className="w-[235px] h-[62px] text-[24px] leading-[32.6px] bg-[#000000] rounded-[12px] font-primary">
					Spread the word!
				</button>
			</div>
		</div>
	);
};

export default NoteSection;
