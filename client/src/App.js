
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItems from "./components/Products/Products";
import CartProvider from "./components/Store/CartContext/CartProvider";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Home from "./components/Header/Home/Home";
import CartElements from "./components/Cart/CartElements/CartElements";
import AdminForm from "./components/Header/Admin/AdminForm";

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
  {
    path : "/Admin",
    element : (
      <>
      <Header /> 
      <AdminForm/>
      </>
    )
  }
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
