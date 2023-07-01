import "./Header.css";
import Cart from "../Cart/Cart";

import { Link } from "react-router-dom";

const Header = () => {
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
        <Link to="Contact" className="header-element">
          Contact
        </Link>
      </p>
      <Cart />
    </div>
  );
};
export default Header;
