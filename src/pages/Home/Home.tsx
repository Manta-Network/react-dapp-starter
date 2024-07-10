import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

function Home() {
	const { open } = useWeb3Modal();
	const { address } = useAccount();
	const { disconnect } = useDisconnect();
	return (
		<div>
			Home Page
			{address ? (
				<button
					onClick={() => disconnect()}
					className="block bg-blue-400 text-white py-2 px-4 rounded-md"
				>
					Disconnect
				</button>
			) : (
				<button
					onClick={() => open()}
					className="block bg-blue-400 text-white py-2 px-4 rounded-md"
				>
					Connect Wallet
				</button>
			)}
			{address && `Connected as ${address}`}
		</div>
	);
}

export default Home;
