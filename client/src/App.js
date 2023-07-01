import ProductItems from "./components/Products/Products";
import CartProvider from "./components/Store/CartContext/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Home from "./components/Header/Home/Home";
import CartElements from "./components/Cart/CartElements/CartElements";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ProductItems />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <Header /> <Home />
      </>
    ),
  },
  {
    path: "/Cart",
    element: (
      <>
        <Header /> <CartElements />
      </>
    ),
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
