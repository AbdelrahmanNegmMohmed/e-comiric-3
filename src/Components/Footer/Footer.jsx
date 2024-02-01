import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instegram_icon from"../Assets/instagram_icon.png"
import pinterst_item from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-contenar">
                <img src={instegram_icon} alt="" />
            </div>
            <div className="footer-icon-contenar">
                <img src={pinterst_item} alt="" />
            </div>
            <div className="footer-icon-contenar">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2024 All Right Reserved.</p>
            <p>Py Negm</p>
        </div>

    </div>
  )
}

export default Footer