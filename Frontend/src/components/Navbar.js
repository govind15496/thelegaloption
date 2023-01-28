import React from 'react';
import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const [ fix, setFix ] = useState(false);

  function setFixed() {
    if(window.scrollY >= 140) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <div className={fix ? 'navbar fixed' : 'navbar'}>
        <div className='navbar__navlinks1'>
          <ul>
            <li><Link to='/news-updates'>News Updates</Link></li>
            <li><Link to='/top-stories'>Top Stories</Link></li>
            <li><Link to='/columns'>Columns</Link></li>
            <li><Link to='/Interviews'>Interviews</Link></li>
            <li><Link to='/Environment'>Environment</Link></li>
            <li><Link to='/rti'>RTI</Link></li>
            <li><Link to='/Know-the-law'>Know The Law</Link></li>
          </ul>
        </div>
        <div className='navbar__navlinks2'>
          <div className='navlink__links2'>
            <ul>
                <li>
                    <Link to='/job-updates'>Job Updates</Link>
                </li>
                <li>
                    <Link to='/book-reviews'>Book Reviews</Link>
                </li>
                <li>
                    <Link to='/events-corner'>Events Corner</Link>
                </li>
                <li>
                    <Link to='/law-firms'>Law Firms</Link>
                </li>
                <li>
                    <Link to='/sc-judgments'>SC Judgments</Link>
                </li>
                <li>
                    <Link to='/law-school'>Law School</Link>
                </li>
                <li>
                    <Link to='/ibc'>IBC</Link>
                </li>
                <li>
                    <Link to='/tax'>TAX</Link>
                </li>
                <li>
                    <Link to='/arbitration'>Arbitration</Link>
                </li>
            </ul>
          </div>

          <div className='navlink__social'>
            <FacebookIcon 
                sx = {{
                color: "#4267B2",
             }}  
            />
            <TwitterIcon color="primary" />
            <InstagramIcon 
                sx = {{
                    color: "#E1306C",
                }}
            />
            <YouTubeIcon
                sx = {{
                color: "red",
             }} 
            />
            <LinkedInIcon color="primary" />
            <WhatsAppIcon sx = {{
                color: "#25D366",
            }} 
            />
          </div>

          <div className='navlink__searchBox'>
            <p>Search...</p>
            <SearchIcon className="search" sx={{
            color: "white",
           }} />
          </div>
        
        </div>
    </div>
  )
}

export default Navbar;