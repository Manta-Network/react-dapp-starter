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
          className="block rounded-md bg-blue-400 px-4 py-2 text-white"
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={() => open()}
          className="block rounded-md bg-blue-400 px-4 py-2 text-white"
        >
          Connect Wallet
        </button>
      )}
      {address && `Connected as ${address}`}
    </div>
  );
}

export default Home;
