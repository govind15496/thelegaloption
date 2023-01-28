import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Logo from "./log1.png";

function Header() {

  const [ open, setOpen ] = useState(false);

  const hamburgerIcon = <MenuIcon 
                          onClick={() => setOpen(!open)}
                          />

  const closeIcon = <CloseIcon className='closeIcon007'
                      onClick={() => setOpen(!open)} 
                      />

  return (
    <div className='header'>
        <div className='header__logo'>
          <div className='header__logoSub'>
            {open ? closeIcon : hamburgerIcon}
            {open && <Sidebar />}
            <Link to='/'><img src={Logo} alt='' /></Link>
          </div>
          <div className='header__sub'>
            <Link to='/login' className='header__sub2'>Login</Link>
          </div>
        </div>
        <Navbar />
        
    </div>
  )
}

export default Header;