import React, { useState } from 'react';
import '../css/nav.css';
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Menu, MenuItem, Popover } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Icon from '@mdi/react'
import { mdiGooglePlus } from '@mdi/js';

let intViewportWidth = window.innerWidth;

const Nav = () => {
  return (
    <div className="header">
            {/* need header top-bar 46px*/}
        <div className='header-topbar'>
            <div className='left'>
                {/* <button>
                    <mdiGooglePlus></mdiGooglePlus>
                </button> */}
                    <FacebookIcon></FacebookIcon>
                <i class="fab fa-facebook-f"></i>
                <TwitterIcon></TwitterIcon>
                <InstagramIcon></InstagramIcon>
                {/* <button> */}
                    <Icon path={mdiGooglePlus}
                        title="User Profile"
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="#B9BFD7"/>
                {/* </button> */}
            </div>

            <div className='right'>
                <a className='header-button'>Get A Quote</a>
            </div>
        </div>

        
        <nav className="header-nav">
            {/* put header menu below top-bar 97px*/}
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

                {
                // <Link className='linkStyle' >
                //     {
                //     /** 
                //      * Need menu to render for mobile nav
                //      * on conditional rendering
                //      */ 
                //     }
                    // <MobileMenu />
                // </Link>
                }
            </ul>
            
        </nav>
    </div>
  );
}

/**
 * Returns nav bar for mobile screen
 */
const MobileNav = () => {
    return (
        <div className="header">
            <nav className="header-nav">
                <Link className='logoLinkStyle' to='/'>
                    <img src={logo} className="App-logo" alt="Brilliance" />
                </Link>
    
                <ul className='nav-links'>
                    <Link className='linkStyle' >
                        {
                        /** 
                         * Need menu to render for mobile nav
                         * on conditional rendering
                         */
                        }
                        <MobileMenu />
                    </Link>
                </ul>
            </nav>
        </div>
    );
}


// const useStyles = makeStyles((theme) => ({
    //     typography: {
        //       padding: theme.spacing(2),
        //     },
        //   }));
        
        
const MobileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const classes = useStyles();
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <div>
            <Button 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                fontSize="large" 
                onClick={handleClick}
            >
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

export default Nav;