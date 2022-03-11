import React, { useContext } from 'react';
import { logout } from '../../firabase.js';
import AppContext from '@context/AppContext';
import '@styles/Header.scss';

const Header = () => {
  const { state: { email }, asignEmail} = useContext(AppContext);

  const handleLogout = () => {
    asignEmail('');
    logout();
  }

  return ( 
    <nav>
      <div>
         {/* <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/summary">Monthly Summary</a>
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
        </ul>  */}
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" >
            {email}
          </li>
          <li>
            <a className="logout" onClick={handleLogout}>
              Logout
            </a>
          </li>          
        </ul>
      </div>
    </nav>
   );
};

export default Header;
