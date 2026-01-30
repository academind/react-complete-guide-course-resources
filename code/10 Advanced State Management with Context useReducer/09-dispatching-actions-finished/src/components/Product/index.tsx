import { useShoppingCart } from '../../store/shopping-cart-context';
import type { Product as ProductType } from '../../types/product';

export default function Product({ id, image, title, price, description }: ProductType) {
  const { dispatch: shoppingCartDispatch } = useShoppingCart();

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => shoppingCartDispatch({ type: 'ADD_ITEM', payload: id })}>
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
