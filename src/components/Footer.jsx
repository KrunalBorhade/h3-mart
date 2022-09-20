import React from 'react'
import "./Footer.css"
import {TbBrandTwitter} from "react-icons/tb";
import {FiFacebook} from "react-icons/fi";
import {FaGooglePlay} from "react-icons/fa";
import {FaAppleAlt} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='footerFlex'>
        <div>
            <h3>COINCAP.IO</h3>
            <p>Methodology</p>
            <p>Support</p>
            <p>Our API</p>
            <p>Rate Comparison</p>
            <p>Careers</p>
        </div>
        <div>
            
                <h3>LEGALS</h3>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <h3>DISCLAIMER</h3>
                <p>Neither ShapeShift AG nor CoinCap are in <br/> any way associated with CoinMarketCap,<br/> LLC or any of its goods and services. </p>
        </div>
        <div>
            <h3>FOLLOW US</h3>
            <TbBrandTwitter style={{ fontSize: '200%' }} />
            <FiFacebook style={{ fontSize: '200%' }} />
        </div>
        <div>
            <h3>COINCAP APP AVAILABLE ON</h3>
            <div><FaGooglePlay style={{ fontSize: '200%' }}/></div>
            <div><FaAppleAlt style={{ fontSize: '200%' }} /></div>
        </div>
    </footer>
  )
}
