import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBell, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import netflixLogo from '../assets/logo1.png'; // Pastikan Anda memiliki logo Netflix di folder assets
import '../assets/style/Navbar.css'; // Impor CSS untuk navbar

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={netflixLogo} alt="Netflix Logo" className="navbar-logo" onClick={() => handleNavigation('/')} />
        <ul className="navbar-menu">
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/tv-shows')}>Tv Show</li>
          <li onClick={() => handleNavigation('/movies')}>Movies</li>
          <li onClick={() => handleNavigation('/new-popular')}>New & Popular</li>
        </ul>
      </div>
      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <FontAwesomeIcon icon={faSearch} className="navbar-icon" />
        <div className="navbar-icon-with-text">
          <FontAwesomeIcon icon={faHeart} className="navbar-icon" />
          <span>MY LIST</span>
        </div>
        <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        <div className="navbar-profile">
          <img src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/idincuy.jpg" alt="Profile" className="navbar-profile-pic" />
          <span className="navbar-profile-name">idin code</span>
          <FontAwesomeIcon icon={faCaretDown} className="navbar-icon-caret" />
          <div className="navbar-profile-menu">
            <ul>
              <li onClick={() => handleNavigation('/about')}>About</li>
            </ul>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faBars} className="navbar-menu-icon" onClick={handleMenuToggle} />
    </nav>
  );
};

export default Navbar;