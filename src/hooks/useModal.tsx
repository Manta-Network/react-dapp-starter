/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import BaseModal from '@/components/BaseModal';

import type { ModalProps } from 'antd';

export interface IModalContentProps<T = any> {
  open: boolean;
  onCancel: () => void;
  onOpen: () => void;
  data: T;
}

export interface IModalProps extends ModalProps {
  cancelCallback?: () => void;
  data?: IModalContentProps['data'];
}

function useModal<T = any>(
  modalContent: (...args: any) => React.JSX.Element,
  initialOpts: Partial<IModalProps> = {}
): [
  React.JSX.Element,
  {
    open: boolean;
    onOpen: (res?: T) => void;
    onCancel: () => void;
    updateOpts: (newOpts: Partial<IModalProps>) => void;
  }
] {
  const [opts, setOpts] = useState(initialOpts);
  const [open, setOpen] = useState(false);
  //   const { isOpen, onOpen: modalOnOpen, onCancel } = useDisclosure();
  const [data, setData] = useState<Partial<T>>();

  const onOpen = (res?: Partial<T>) => {
    res && setData(res);
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
    opts?.cancelCallback && opts?.cancelCallback();
  };

  const updateOpts = (newOpts: Partial<IModalProps>) => {
    setOpts(prevOpts => ({ ...prevOpts, ...newOpts }));
  };

  const finData = { ...data, ...(opts?.data || {}) };
  // console.log('finData', finData);
  const ThisModal = open ? (
    <BaseModal<Partial<T>>
      data={finData}
      open={open}
      onCancel={() => {
        onCancel();
      }}
      {...opts}
    >
      {modalContent({
        open,
        onCancel,
        onOpen,
        data: finData
      })}
    </BaseModal>
  ) : (
    <></>
  );

  return [
    ThisModal,
    {
      open,
      onOpen,
      onCancel,
      updateOpts
    }
  ];
}
export default useModal;
