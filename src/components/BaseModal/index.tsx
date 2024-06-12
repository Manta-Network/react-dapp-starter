import { Modal, ModalProps } from 'antd';
import './index.css';
import modalClose from '@/assets/svgs/modal_close.svg';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaeModalProps<T = any> extends ModalProps {
  data?: T;
}

function BaseModal<T>({
  children,
  open,
  closeIcon = <img className="m-1" src={modalClose} />,
  footer = null,
  onCancel,
  ...rest
}: BaeModalProps<T>) {
  return (
    <Modal
      className="base-modal"
      style={{
        padding: 0
      }}
      open={open}
      onCancel={onCancel}
      closeIcon={closeIcon}
      footer={footer}
      {...rest}
    >
      {children}
    </Modal>
  );
}

export default BaseModal;
