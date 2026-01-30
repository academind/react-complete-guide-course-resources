import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Cart from './Cart';

export interface CartModalRef {
  open: () => void;
}

interface CartModalProps {
  title: string;
  actions: React.ReactNode;
  ref?: React.Ref<CartModalRef>;
}

function CartModal({ title, actions, ref }: CartModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (!dialog.current) {
        throw new Error('Dialog reference is not set');
      }

      dialog.current.showModal();
    },
  }), []);

  const modalElement = document.getElementById('modal');

  if (!modalElement) {
    throw new Error('Modal element not found');
  }

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    modalElement
  );
}

export default CartModal;
