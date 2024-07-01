import { useEffect, useMemo, useState } from 'react';

import { Erc721__factory } from '@/contracts/interface';
import useTransaction from './useTransaction';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import { useEthersSigner } from './useEthersSigner';

export interface UseErc721Props {
  tokenAddress: string;
  approveTokenAddress?: string;
  tokenId?: string;
}

function Index({
  tokenAddress,
  approveTokenAddress = ethers.constants.AddressZero,
  tokenId
}: UseErc721Props) {
  const signer = useEthersSigner();
  const { address } = useAccount();
  const [isApproved, setIsApproved] = useState<boolean>();
  const isLoading = isApproved === undefined;
  const erc721Abi = useMemo(() => {
    if (!signer || !tokenAddress) return null;
    return Erc721__factory.connect(tokenAddress, signer);
  }, [signer, tokenAddress]);

  // 授权
  const approveState = useTransaction(erc721Abi?.approve, {
    wait: true,
    args: [approveTokenAddress, tokenId as string]
  });

  const handleGetApproved = async () => {
    try {
      const res = await erc721Abi?.getApproved(tokenId as string);
      setIsApproved(res === approveTokenAddress);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      !address ||
      !approveTokenAddress ||
      approveTokenAddress === ethers.constants.AddressZero
    )
      return;
    handleGetApproved();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, erc721Abi, approveTokenAddress, approveState.result]);

  return {
    approveState,
    isApproved,
    isLoading
  };
}
export default Index;
