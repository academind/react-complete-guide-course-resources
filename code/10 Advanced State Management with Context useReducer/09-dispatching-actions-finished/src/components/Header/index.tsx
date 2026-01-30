import { useRef } from 'react';

import CartModal, { type CartModalRef } from '../CartModal';
import { useShoppingCart } from '../../store/shopping-cart-context';

export default function Header() {
  const modal = useRef<CartModalRef>(null);

  const { state: { items } } = useShoppingCart();

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    if (!modal.current) {
      throw new Error('Modal reference is not set');
    }

    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
