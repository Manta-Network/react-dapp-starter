/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from 'antd';
import { useState } from 'react';

import { TX_SUCCESS, WalletErrorCode } from '@/constants/walletConstants';
import { portalErrorTranslation } from '@/utils/format';

//  TODO: add return types

function useTransaction<Method extends (...args: any[]) => Promise<any>>(
  method: Method | undefined,
  {
    args = [],
    wait = false
  }: { args?: Parameters<Method> | []; wait?: boolean },
  successMessage = 'Operate success'
) {
  const [result, setResult] = useState<Response>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const callMethod = async (...fnArgs: Parameters<Method>) => {
    setLoading(true);
    setError(null);
    if (!method) {
      notification.error({
        message: 'Method is not defined'
      });
      return;
    }
    try {
      const res = await method(...[...args, ...fnArgs]);
      if (!res) return;
      let result = res;
      if (wait && res?.wait) {
        const ret = await res?.wait();
        if (ret.status === TX_SUCCESS) {
          result = ret;
        }
      }

      successMessage &&
        notification.success({
          message: successMessage
        });
      setResult(result);
      return result;
    } catch (e: any) {
      if (
        e.code === WalletErrorCode.rejectedNum ||
        e.code === WalletErrorCode.rejectedStr
      ) {
        notification.error({
          message: 'User rejected the action'
        });
        setError(e);
        return;
      }

      notification.error({
        message: portalErrorTranslation(e)
      });
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { run: callMethod, result, error, loading };
}

export default useTransaction;
