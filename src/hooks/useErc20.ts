import { useEffect, useMemo, useState } from 'react';
// import { useConfigContext } from '@/context/ConfigContext';
import { Erc20__factory } from '@/contracts/interface';
import useTransaction from './useTransaction';
import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { fromTokenDecimals, fromWei } from '@/utils/format';
import { useEthersSigner } from './useEthersSigner';
import { useAccount } from 'wagmi';

export interface UseErc20Props {
  tokenAddress: string;
  approveTokenAddress?: string;
  approveAmount?: string;
}

function Index({
  tokenAddress,
  approveTokenAddress = ethers.constants.AddressZero,
  approveAmount = ethers.constants.MaxUint256.toString()
}: UseErc20Props) {
  const signer = useEthersSigner();
  const { address } = useAccount();
  const [authorizationAmount, setAuthorizationAmount] = useState<string>(); // 授权额度
  const [balance, setBalance] = useState<string>();

  const erc20Abi = useMemo(() => {
    if (!signer || !tokenAddress) return null;
    return Erc20__factory.connect(tokenAddress, signer);
  }, [signer, tokenAddress]);

  // 授权
  const approveState = useTransaction(erc20Abi?.approve, {
    wait: true,
    args: [approveTokenAddress, approveAmount]
  });

  // 获取授权额度
  const getAllowance = async () => {
    if (!address || !approveTokenAddress) return;
    const res = await erc20Abi?.allowance(address, approveTokenAddress);
    setAuthorizationAmount(fromWei(res?.toString())?.toString());
  };

  const isEnough = useMemo(() => {
    if (!authorizationAmount) return undefined;

    return (
      new BigNumber(authorizationAmount).gte(approveAmount) &&
      new BigNumber(authorizationAmount).gt('0')
    );
  }, [authorizationAmount, approveAmount]);

  const isLoading = isEnough === undefined;

  const getBalance = async () => {
    const balance = await erc20Abi?.balanceOf(address as string);
    const decimals = await erc20Abi?.decimals();
    const balanceStr = balance
      ? fromTokenDecimals(balance?.toString(), decimals as number)?.toString()
      : '0';

    setBalance(balanceStr);
  };

  useEffect(() => {
    getAllowance(); // 更新授权额度
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveState.result]);

  useEffect(() => {
    if (approveTokenAddress === ethers.constants.AddressZero) return;
    getAllowance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveTokenAddress]);

  useEffect(() => {
    if (!address || !erc20Abi) return;

    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erc20Abi, address]);

  return {
    isEnough,
    isLoading,
    approveState,
    authorizationAmount,
    balance,
    getBalance
  };
}
export default Index;
