import React from 'react';

const Tokenomics = () => {
	return (
		<div className="mt-[436px] md:mt-[100px] sm:mt-[80px] mb-[173px] md:mb-[80px] sm:mb-[80px]">
			<div>
				<h1 className="pb-[64px] sm:pb-[30px] sm:text-[40px]">
					Based Benson’s <br /> Tokenomics
				</h1>

				<div className="max-w-[985px] h-[614px] mx-auto bg-[#FFFFFF] border-default px-[88px] md:px-[25px] sm:px-[15px] py-[93px] sm:py-[20px] md:py-[30px] grid grid-cols-2 sm:grid-cols-1 gap-[30px] md:gap-[25px] sm:gap-[15px] mb-[64px] md:mb-[30px] md:mx-5">
					<div className="bg-[#0585FC] border-default text-center flex justify-center items-center">
						<div>
							<h2 className="text-[48px] font-primary leading-[58px] ">
								Total Supply
							</h2>
							<h5 className="text-[32px] font-primary leading-[58px]">
								500,500,000
							</h5>
						</div>
					</div>
					<div className="bg-[#0585FC] border-default text-center flex justify-center items-center">
						<div>
							<h2 className="text-[48px] font-primary leading-[58px] ">
								100% LP <br /> 0% Presale
							</h2>
						</div>
					</div>
					<div className="bg-[#0585FC] border-default text-center flex justify-center items-center">
						<div>
							<h2 className="text-[48px] font-primary leading-[58px] ">
								LP Burned <br /> At Launch
							</h2>
						</div>
					</div>
					<div className="bg-[#0585FC] border-default text-center flex justify-center items-center">
						<div>
							<h2 className="text-[48px] font-primary leading-[58px] ">
								Ownership <br /> Revoked
							</h2>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center mb-[56px]">
					<button className="w-[235px] h-[62px] text-[24px] leading-[32.6px] bg-[#000000] rounded-[12px] font-primary">
						See the Charts
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
