import Header from './components/Header';
import Shop from './components/Shop';
import Product from './components/Product';
import { DUMMY_PRODUCTS } from './dummy-products';
import { ShoppingCartProvider } from './store/shopping-cart-context';

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((item) => (
          <li key={item.id}>
            <Product {...item} />
          </li>
        ))}
      </Shop>
    </ShoppingCartProvider>
  );
}

export default App;
