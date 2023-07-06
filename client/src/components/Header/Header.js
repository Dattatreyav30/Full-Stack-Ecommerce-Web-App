import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Store/CartContext/cart-context";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const onChnageHandler = (e) => {
    e.preventDefault();
    let selectedValue = e.target.value;

    if (selectedValue === "logout") {
      navigate("/user/login");
      localStorageremover();
    }
    
    if (selectedValue === "change-password") navigate("/user/change-password");
  };

  const localStorageremover = () => {
    localStorage.removeItem("token");
  };

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
      <select className="custom-dropdown" onChange={onChnageHandler}>
        <option defaultValue="user">user</option>
        <option value="logout">Logout</option>
        <option value="change-password">change-password</option>
      </select>
    </div>
  );
};
export default Header;