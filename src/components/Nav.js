import React, { useState } from 'react';
import '../css/nav.css';
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Menu, MenuItem, Popover } from '@material-ui/core';

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

                <Link className='linkStyle' >
                    <SimpleMenu/>
                </Link>
                
            </ul>
        </nav>
    </div>
  );
}

export default Nav;

// const useStyles = makeStyles((theme) => ({
//     typography: {
//       padding: theme.spacing(2),
//     },
//   }));


const SimpleMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    // const classes = useStyles();
    const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" fontSize="large" onClick={handleClick}>
            <MenuIcon className='drop-menu'/>
        </Button>

        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link className='MenuLinkStyle' to='/solutions'>
                        <li> Solutions </li>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                        <Link className='MenuLinkStyle' to='/about'>
                            <li> About </li>
                        </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Link className='MenuLinkStyle' to='/contact'>
                        <li> Contact </li>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Link className='MenuLinkStyle' to='/blog'>
                        <li> Blog </li>
                    </Link>
                </MenuItem>
            </Menu>
        </Popover>
      </div>
    );
}
