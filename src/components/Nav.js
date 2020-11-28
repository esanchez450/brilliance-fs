import React from 'react';
import '../css/nav.css';
import {Link} from 'react-router-dom'
import logo from '../logo.svg';

const Nav = () => {
    
  return (
    <div className="header">
        <nav className="header-nav">
            <Link className='logoLinkStyle' to='/'>
                <img src={logo} className="App-logo" alt="Brilliance" />
            </Link>

            <ul className='nav-links'>
                <Link className='linkStyle' to='/solutions'>
                    <li> Solutions </li>
                </Link>

                <Link className='linkStyle' to='/about'>
                    <li> About </li>
                </Link>

                <Link className='linkStyle' to='/contact'>
                    <li> Contact </li>
                </Link>

                <Link className='linkStyle' to='/blog'>
                    <li> Blog </li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
