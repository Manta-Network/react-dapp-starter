import { createContext, useContext } from 'react';
import { Erc20__factory } from '@/contracts/interface';

export type IContractContext = Partial<ReturnType<typeof useContracts>>;
export const ContractsContext = createContext<IContractContext>({});

export const useContracts = () => {
  const erc20Contract = Erc20__factory.connect('Contract Address', '');

  return {
    erc20Contract
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
  return values;
};
