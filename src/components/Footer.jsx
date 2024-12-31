import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import '../assets/style/Footer.css';
import netflixLogo from '../assets/logo1.png'; // Path to your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        {/* Item Konten 1 */}
        <div className="content-item-1">
          <img src={netflixLogo} alt="Netflix Logo" className="logo" />
          <p className="footer-text">Netflix.inc © Idin Code</p>
        </div>
        
        {/* Item Konten 2 */}
        <div className="container-item">
        <div className="content-item-2">
          <ul className="list">
            <li>Audio Description</li>
            <li>Joobs</li>
            <button className="button-i">Service</button>
          </ul>
          <ul className="list">
            <li>Help Center</li>
            <li>Term To Use</li>
          </ul>
          <ul className="list">
            <li>Media Center</li>
            <li>Privacy Coockies</li>
          </ul>
          <ul className="list">
            <li>Investor Relations</li>
          </ul>
        </div>
        </div>

        {/* Item Konten 3 */}
        <div className="content-item-3">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;