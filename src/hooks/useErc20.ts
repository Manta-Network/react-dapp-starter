import { useEffect, useMemo, useState } from 'react';
// import { useConfigContext } from '@/context/ConfigContext';
import { Erc20__factory } from '@/contracts/interface';
import useTransaction from './useTransaction';
import BigNumber from 'bignumber.js';
import { ethers, BigNumber as EBigNumber } from 'ethers';
import { fromTokenDecimals, fromWei } from '@/utils/format';

export interface UseErc20Props {
  tokenAddress: string;
  approveTokenAddress?: string;
  approveAmount?: string;
}

export const MaxUint256: EBigNumber = /*#__PURE__*/ EBigNumber.from(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
);

function Index({
  tokenAddress,
  approveTokenAddress = ethers.constants.AddressZero,
  approveAmount = '0'
}: UseErc20Props) {
  const { signerOrProvider, address } = useConfigContext();
  const [authorizationAmount, setAuthorizationAmount] = useState<string>(); // 授权额度
  const [balance, setBalance] = useState<string>();

  const erc20Abi = useMemo(() => {
    if (!signerOrProvider || !tokenAddress) return null;
    return Erc20__factory.connect(tokenAddress, signerOrProvider);
  }, [signerOrProvider, tokenAddress]);

  // 授权
  const approveState = useTransaction(erc20Abi?.approve, {
    wait: true,
    args: [approveTokenAddress, MaxUint256]
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
