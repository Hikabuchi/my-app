import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={require('../../assets/logo.png')} alt="Logo" className='logo'/>
      </Link>
      <Link to="/">
        <img src={require('../../assets/icons/Logout.png')} alt="logOut" className='logOut'/>
      </Link>
    </header>
  );
};

export default Header;
