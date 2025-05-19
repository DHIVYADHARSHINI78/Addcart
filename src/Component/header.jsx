import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cart }) => {
  return (
    <div className='navbar'>
      <div className="logo">Food cart</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/ViewCart"}>
            <span className='cart-count'>{cart.length}</span>
            View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
