import { BigNumber } from 'bignumber.js';
import numbro from 'numbro';

export const portalErrorTranslation = (e: any) => {
  const reason = e?.reason ? e?.reason : '';
  const errMessage =
    reason ||
    e?.data?.message ||
    e?.message ||
    e?.error?.message ||
    e ||
    'Unknown error';
  return errMessage;
};

// toWei
export const toWei = (value?: string | number) => {
  return new BigNumber(value || '').times(new BigNumber(10).pow(18));
};
// fromWei
export const fromWei = (value?: string | number) => {
  return new BigNumber(value || '').div(new BigNumber(10).pow(18));
};

// from token's address and decimals
export const toTokenDecimals = (value: string | number, decimals: number) => {
  return new BigNumber(value || '').times(new BigNumber(10).pow(decimals));
};
// to token's address and decimals
export const fromTokenDecimals = (value: string | number, decimals: number) => {
  return new BigNumber(value || '').div(new BigNumber(10).pow(decimals));
};

export const formatTokenNumber = (value?: string) => {
  return numbro(value || 0).format({
    average: true,
    trimMantissa: true,
    mantissa: 4,
    roundingFunction(num: number) {
      return Math.floor(num);
    }
  });
};
