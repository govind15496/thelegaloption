import React from 'react';
import './Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function Footer() {
  return (
    <div className='footer'>

        <div className='footer1'>
            <div className='footer__div2'>
                <ul>
                    <li><a href='/top-stories'>Top Stories</a></li>
                    <li><a href='/news-updates'>News Update</a></li>
                    <li><a href='/columns'>Columns</a></li>
                    <li><a href='/interviews'>Interviews</a></li>
                    <li><a href='/international'>International</a></li>
                    <li><a href='/rti-updates'>RTI Updates</a></li>
                    <li><a href='/cover-story'>Cover Story</a></li>
                </ul>
            </div>

            <div className='footer__div3'>
                <ul>
                    <li><a href='/know-the-law'>Know The Law</a></li>
                    <li><a href='/law-firms'>Law Firms</a></li>
                    <li><a href='/job-updates'>Job Updates</a></li>
                    <li><a href='/book-reviews'>Book Reviews</a></li>
                    <li><a href='/events-corner'>Events Corner</a></li>
                </ul>
            </div>

            <div className='footer__div4'>
                <ul>
                    <li><a href='/editors-pick'>Editor's Pick</a></li>
                    <li><a href='/law-school-corner'>Law School Corner</a></li>
                    <li><a href='/articles'>Articles</a></li>
                    <li><a href='/call-for-paper'>Call For Papers</a></li>
                    <li><a href='/competitions'>Competitions</a></li>
                </ul>
            </div>

            <div className='footer__div5'>
                <ul>
                    <li><a href='/placements'>Placements</a></li>
                    <li><a href='/scholarship'>Scholarship</a></li>
                    <li><a href='/seminars'>Seminars</a></li>
                    <li><a href='/environment'>Environment</a></li>
                    <li><a href='/book-reviews'>Book Reviews</a></li>
                    <li><a href='/internship'>Internship</a></li>
                </ul>
            </div>
        </div>

        <div className='footer2'>
            <div className='footer2__links'>
                <ul>
                    <li>
                        <p className='footer2__linksp'>2022 © All Rights Reserved @TheLegalOption</p>
                    </li>
                    <li>
                        <h4>Who We Are</h4>
                    </li>
                    <li>
                        <h4>Careers</h4>
                    </li>
                    <li>
                        <h4>Advertise With Us</h4>
                    </li>
                    <li>
                        <h4>Contact Us</h4>
                    </li>
                    <li>
                        <h4>Privacy Policy</h4>
                    </li>
                    <li>
                        <h4>Terms And Condition</h4>
                    </li>
                </ul>
            </div>

            <div className='footer2__social'>
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
        
        </div>
            
    </div>
  )
}

export default Footer;