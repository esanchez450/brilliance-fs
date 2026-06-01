import React, { useState, useEffect } from 'react';
import '../css/nav.css';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const navLinks = [
  { to: '/solutions', label: 'Solutions' },
  { to: '/about',     label: 'About'     },
  { to: '/blog',      label: 'Blog'      },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="nav-brand" to="/">
          Brilliance<span className="brand-accent">FS</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                className={`nav-link${location.pathname === to ? ' active' : ''}`}
                to={to}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link className="nav-cta" to="/contact">Get a Quote</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-cta">Get a Quote</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
