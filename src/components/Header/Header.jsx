import React, { useState, useEffect } from 'react';
// import logo from '../../assets/logo1.png';
// import icon from '../../assets/user-icon.png';
import './Header.css';
import { useNavigate,  Outlet } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
      <header className="header-nav">
        <div className="logo-section">
          {/* <img src={logo} alt="Logo" className="logo" /> */}
        </div>
        <div className="navbar">  
          <div className="header-btn">
              <button className="btn-header" onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
