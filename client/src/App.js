import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItems from "./components/Products/Products";
import CartProvider from "./components/Store/CartContext/CartProvider";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Home from "./components/Header/Home/Home";
import CartElements from "./components/Cart/CartElements/CartElements";
import AdminForm from "./components/Header/Admin/AdminForm/AdminForm";
import Contact from "./components/Header/Contact/Contact";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import SignUp from "./components/User/Sighnup/SighnUp";
import Login from "./components/User/Login/Login";
import PassWordChange from "./components/Header/Password/PasswordChange";

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
    path: "/Admin",
    element: (
      <>
        <Header />
        <AdminForm />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <>
        <Header />
        <ProductDetails />
      </>
    ),
  },
  {
    path: "/user/signup",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/change-password",
    element: <PassWordChange />,
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
