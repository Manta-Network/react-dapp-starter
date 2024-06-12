import MantaSvg from '@/assets/home/manta.svg?react';
import useModal from '@/hooks/useModal';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { notification, Button } from 'antd';
import { useAccount, useDisconnect } from 'wagmi';
import type { IModalContentProps } from '@/hooks/useModal';
interface IModalProps {
  onConfirm: () => void;
}

function ModalContent({ data }: IModalContentProps<IModalProps>) {
  return (
    <div className="text-black-title mt-6 flex flex-col gap-6 leading-normal">
      <div className="flex items-center justify-center gap-2 rounded-lg bg-[url('./assets/profile-stake-bg.png')] bg-cover p-6 text-[24px] text-black">
        Staking on Manta Atlantic
      </div>
      <span className="text-[14px] font-[400]">
        Staking 500+ $MANTA with a minimum duration of over 30 days, qualifies
        you for Initial Rewards. The snapshot for staking will be announced at a
        later date.
      </span>

      <button
        onClick={() => {
          data.onConfirm();
        }}
        className="btn-primary"
      >
        Confirm
      </button>
    </div>
  );
}

const ExampleModal = (props: IModalContentProps<IModalProps>) => (
  <ModalContent {...props} />
);

const Example = () => {
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const [MantaModal, { onOpen, onCancel }] = useModal(ExampleModal, {
    title: 'Manta Modal',
    width: 434
  });

  const handleNotification = () => {
    notification.success({
      message: 'Notification Success'
    });
  };
  const openModal = () => {
    onOpen({
      onConfirm: () => {
        onCancel();
      }
    });
  };
  return (
    <div className="mt-4 flex flex-col gap-4">
      Examples
      <MantaSvg />
      <div>
        <Button onClick={handleNotification}>
          click here to test Notification
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => {
            isConnected ? disconnect() : open();
          }}
        >
          {isConnected ? 'disconnect' : 'click here to Connect Wallet'}
        </Button>
        {isConnected && <h1>address is {address}</h1>}
      </div>
      <div>
        <Button onClick={openModal}>click here to show Modal</Button>
      </div>
      {MantaModal}
    </div>
  );
};

export default Example;
