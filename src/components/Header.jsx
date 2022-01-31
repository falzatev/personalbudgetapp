import React from 'react';
import { logout } from '/src/firabase.js';
import '@styles/Header.scss';

const Header = ({ email }) => {
  return ( 
    <nav>
      <div className="navbar-left">
        {/* <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul> */}
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" >
            {email}
          </li>
          <li>
            <a className="logout" onClick={logout}>
              Logout
            </a>
          </li>          
        </ul>
      </div>
    </nav>
   );
};

export default Header;
