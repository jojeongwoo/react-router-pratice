import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const styleNav = {
  color: 'white',
  textDecoration: 'none'
}

function Nav() {
  return (
    <nav>
      <h3>logo</h3>
        <ul className='nav_link'>
          <Link to='/about' style={styleNav}>
            <li>About</li>
          </Link>
          <Link to='/shop' style={styleNav}>
            <li>Shop</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
