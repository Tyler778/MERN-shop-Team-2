import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OverlayTrigger } from 'react-bootstrap';
import Login from './Login.js'

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div>

        <Link to="/" className="navbar__logo">
          <h2>MERN Shopping Cart</h2>
        </Link>

        </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
            <Link to="/login" className="account__link">
              Sign In
            </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
