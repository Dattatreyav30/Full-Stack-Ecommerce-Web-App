import './Header.css'
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <div className="header-elements">
      <a href='/Home' className='header-element'>Home</a>
      <a href='/About' className='header-element'>About</a>
      <a href='Contact' className='header-element'>Contact</a>
      <Cart/>
    </div>
  );
};
export default Header;
