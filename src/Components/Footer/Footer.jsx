import React from 'react'
import './Footer.css'
import shopping_Bag from '../Assets/shoppingBag.png'
import seat_icon from '../Assets/seat-icon.png'
import facebook from '../Assets/facebook.png'
import whatsapp from '../Assets/whatsapp.png'
import youtube from '../Assets/youtube.png'
import instagram from '../Assets/instagram.png'
import tiktok from '../Assets/tiktok (2).png'

export const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-logo">
          <img src={shopping_Bag} alt="Shopping Bag" className="shopping-bag" />
          <div className="footer-logo-content">
            <img src={seat_icon} alt="Seat Icon" className="seat-icon" />
            <div className="footer-logo-text">
              <h1>SuperHome Interiors</h1>
              <p>For affordable furniture n services</p>
            </div>
          </div>
          </div>
          <ul className="footer-links">
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>About</li>
            <li>contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
                 <img src={facebook} alt="" />
            </div> 
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>     
            <div className="footer-icons-container">
                <img src={tiktok} alt="" />
            </div> 
            <div className="footer-icons-container">
                 <img src={instagram} alt="" />
            </div> 
             <div className="footer-icons-container">
                 <img src={youtube} alt="" />
            </div> 
          </div>
          <div className="footer-copyright">
            <hr/>
            <p>copyright @ collinstone.All rights reserved</p>
          </div>
    </div>
  )
}
