import Cart from "./components/Cart/Cart";
import ProductItems from "./components/Products/Products";
import CartProvider from "./components/Store/CartContext/CartProvider";
const App = () => {
  return (
    <CartProvider>
      <Cart />
      <ProductItems />
    </CartProvider>
  );
};

export default App;
