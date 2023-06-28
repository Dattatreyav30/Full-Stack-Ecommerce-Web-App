import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import ProductItems from "./components/Products/Products";

const App = () => {
  return (
    <Fragment>
      <Cart/>
      <ProductItems />
    </Fragment>
  );
};

export default App;
