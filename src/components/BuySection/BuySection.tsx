import Image from 'next/image';
import React from 'react';

const BuySection = () => {
	return (
		<div className="mb-[536px] md:mb-[150px] sm:mb-[50px]">
			<div>
				<h1 className="!leading-[58px] pb-5 sm:text-[40px]">
					How To Buy
				</h1>

				<div className="max-w-[985px] mx-auto h-[614px] md:h-auto border-default px-[48px] sm:px-3 py-[50px] sm:py-8 bg-[#FFFFFF] md:mx-5">
					<div>
						<div className="flex gap-2 pb-7 sm:pb-4">
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								1.
							</p>
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								Set up a crypto wallet with access to the Base
								network. Coinbase Wallet is recommended. If you
								are using another wallet such as MetaMask,
								follow these steps to connect to Base.
							</p>
						</div>
						<div className="flex gap-2 pb-7 sm:pb-4">
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								2.
							</p>
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								Send Ethereum (ETH) to your wallet on the Base
								network, or send to your wallet via the Ethereum
								network then bridge to Base using Coinbase
								Wallet’s in-wallet bridge, Orbiter or Synapse.
							</p>
						</div>
						<div className="flex gap-2 pb-7 sm:pb-4">
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								3.
							</p>
							<div>
								<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
									Head to LlamaSwap with this link that has an
									ETH to $BENSON swap preloaded. LlamaSwap is
									an aggregator that swaps via multiple sites
									at once, giving you the best price. Make
									sure your wallet is connected on the Base
									network.
								</p>{' '}
								<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary pt-7 sm:pt-4 text-[#000000] opacity-[70%]">
									$BENSON contract address:
								</p>
							</div>
						</div>

						<div className="flex gap-2">
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								4.
							</p>
							<p className="text-[24px] sm:text-[18px] leading-[32px] font-primary opacity-[70%] text-[#000000]">
								Select how much you want to swap for $BENSON,
								click Swap and confirm the transaction in your
								wallet.
							</p>
						</div>
						<Image
							className="-ml-[55px] md:ml-0 md:items-center sm:hidden md:hidden "
							src="assets/images/cat-buy.svg"
							alt="buy cat img"
							width={350}
							height={350}
						/>
					</div>
				</div>
				<div className="hidden md:flex sm:flex justify-center items-center">
					<Image
						className="-ml-[55px] md:ml-0 md:items-center md:w-[500px] md:h-[500px]"
						src="assets/images/cat-buy.svg"
						alt="but cat img"
						width={350}
						height={350}
					/>
				</div>
			</div>
		</div>
	);
};

export default BuySection;
