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
  tokenAddress?: string;
  approveAddress?: string;
  approveAmount?: string;
}

function Index({
  tokenAddress,
  approveAddress = ethers.constants.AddressZero,
  approveAmount = ethers.constants.MaxUint256.toString()
}: UseErc20Props) {
  const signer = useEthersSigner();
  const { address } = useAccount();
  const [allowanceAmount, setAllowanceAmount] = useState<string>(); // 授权额度
  const [balance, setBalance] = useState<string>();

  const erc20Abi = useMemo(() => {
    if (!signer || !tokenAddress) return null;
    return Erc20__factory.connect(tokenAddress, signer);
  }, [signer, tokenAddress]);

  // 授权
  const approveState = useTransaction(erc20Abi?.approve, {
    wait: true,
    args: [approveAddress as string, ethers.constants.MaxUint256]
  });

  // 获取授权额度
  const getAllowance = async () => {
    if (!address || !approveAddress) return;
    const res = await erc20Abi?.allowance(address, approveAddress);
    setAllowanceAmount(res ? fromWei(res?.toString())?.toString() : '0');
  };

  const isOverAllowance = useMemo(() => {
    if (!allowanceAmount) return undefined;

    return (
      new BigNumber(allowanceAmount).gte(approveAmount) &&
      new BigNumber(allowanceAmount).gt('0')
    );
  }, [allowanceAmount, approveAmount]);

  const isAllowanceLoading = isOverAllowance === undefined;

  const getBalance = async () => {
    const balance = await erc20Abi?.balanceOf(address as string);
    const decimals = await erc20Abi?.decimals();
    const balanceStr = balance
      ? fromTokenDecimals(balance?.toString(), decimals as number)?.toString()
      : '0';

    setBalance(balanceStr);
  };

  useEffect(() => {
    getAllowance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveState.result]);

  useEffect(() => {
    if (
      !address ||
      !erc20Abi ||
      !approveAddress ||
      approveAddress === ethers.constants.AddressZero
    )
      return;

    getAllowance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveAddress, address, erc20Abi]);

  useEffect(() => {
    if (!address || !erc20Abi) return;

    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erc20Abi, address]);

  return {
    isOverAllowance,
    isAllowanceLoading,
    approveState,
    allowanceAmount,
    balance,
    getBalance
  };
}
export default Index;
