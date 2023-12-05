import React, { useState } from 'react';
import './Navbar.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src="kaleka.jpg" alt="Kaleka Logo" />
    </div>
  );
};

const NavbarItem = ({ isActive, children }) => {
  return (
    <li className={`mx-4 ${isActive ? 'text-orange' : 'text-white'}`}>
      {children}
    </li>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black py-4">
      <nav className="flex items-center justify-between max-w-4xl mx-auto">
        {/* Hamburger Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`navicon ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Objek (Logo) */}
        <Logo />

        {/* Navbar Items */}
        <ul className={`navbar-items ${isMenuOpen ? 'active' : ''}`}>
          <NavbarItem isActive>Beranda</NavbarItem>
          <NavbarItem>Tentang Kami</NavbarItem>
          {/* Tambahkan item lainnya sesuai kebutuhan */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
