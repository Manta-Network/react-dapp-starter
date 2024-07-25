import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

function Home() {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const showErrorToast = () => {
    toast.error('An error toast shows up.');
  };
  return (
    <div>
      Home Page
      {address ? (
        <Button onClick={() => disconnect()}>Disconnect</Button>
      ) : (
        <Button onClick={() => open()}>Connect Wallet</Button>
      )}
      {address && `Connected as ${address}`}
      <div>
        <Button onClick={showErrorToast}>error toast</Button>
      </div>
    </div>
  );
}

export default Home;
