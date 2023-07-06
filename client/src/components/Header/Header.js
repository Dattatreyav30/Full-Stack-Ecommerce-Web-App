import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Store/CartContext/cart-context";

const Header = () => {
  
  const cartCtx = useContext(CartContext);

  const localStorageremover = () =>{
    localStorage.removeItem("token");
  }

  return (
    <div className="header-elements">
      <p>
        <Link to="/Home" className="header-element">
          Home
        </Link>
      </p>
      <p>
        <Link to="/" className="header-element">
          Store
        </Link>
      </p>
      <p>
        <Link to="/About" className="header-element">
          About
        </Link>
      </p>
      <p>
        <Link to="/Contact" className="header-element">
          Contact
        </Link>
      </p>
      <Link to="/Admin" className="header-element">
        Admin
      </Link>
      <Link to="/Cart" className="header-element">
        Cart - {cartCtx.items.length}
      </Link>
      <Link to="/user/login" className="header-element" onClick={localStorageremover}>
        Logout
      </Link>
    </div>
  );
};
export default Header;
