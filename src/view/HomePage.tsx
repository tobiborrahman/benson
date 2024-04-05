import About from '@/components/About/About';
import BuySection from '@/components/BuySection/BuySection';
import DexSection from '@/components/Dex/DexSection';
import NoteSection from '@/components/NoteSection/NoteSection';
import Tokenomics from '@/components/Tokenomics/Tokenomics';
import React from 'react';

const HomePage = () => {
	return (
		<>
			<About />
			<NoteSection />
			<BuySection />
			<Tokenomics />
		<DexSection />
		</>
	);
};

export default HomePage;
