import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
 



  return (
    <div className='sidebar'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news-updates'>News Update</Link></li>
            <li><Link to='/top-stories'>Top Stories</Link></li>
            <li><Link to='/columns'>Columns</Link></li>
            <li><Link to='/Interviews'>Interviews</Link></li>
            <li><Link to='/Environment'>Environment</Link></li>
            <li><Link to='/rti'>RTI</Link></li>
            <li><Link to='/Know-the-law'>Know The Law</Link></li>
            
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
  )
}

export default Sidebar;