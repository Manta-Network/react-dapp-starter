import { createContext, useCallback, useContext } from 'react';
import { Erc20__factory } from '@/contracts/interface';
import { useEthersSigner } from '@/hooks/useEthersSigner';

export type IContractContext = ReturnType<typeof useContracts>;
export const ContractsContext = createContext<IContractContext | undefined>(
  undefined
);

export const useContracts = () => {
  const signer = useEthersSigner();

  const register = useCallback(() => {
    if (!signer) {
      return;
    }
    const usdtContract = Erc20__factory.connect(
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
      signer
    );
    return {
      usdtContract
    };
  }, [signer]);

  return {
    ...register()
  };
};

export const ContractsProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const contracts = useContracts();
  return (
    <ContractsContext.Provider value={contracts}>
      {children}
    </ContractsContext.Provider>
  );
};

export const useContractsContext = () => {
  const values = useContext(ContractsContext);

  return values as IContractContext;
};
