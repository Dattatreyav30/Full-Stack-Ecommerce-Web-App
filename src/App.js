import ProductItems from "./components/Products/Products";
import CartProvider from "./components/Store/CartContext/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Home from "./components/Header/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Header />
        <ProductItems />
      </CartProvider>
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
