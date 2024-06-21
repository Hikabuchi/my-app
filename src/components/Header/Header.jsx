import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={require('../../assets/logo.png')} alt="Logo" className='logo'/>
      </Link>
      <div className="burger-menu">
      <div className='burger-item' onClick={() => setIsOpen(!isOpen)}>
        <span className="icon-bar line-one"></span>
        <span className="icon-bar  line-two"></span>
        <span className="icon-bar  line-three"></span>
      </div>
      {isOpen && (
        <nav className="burger-nav">
        <ul className='ul-burger'>
          <li className='menu-item'>
            <Link to="/about-center">О центре</Link>
          </li>
          <li className='menu-item'>
            <Link to="/about-course">О курсе</Link>
          </li>
          <li className='menu-item'>
            <Link to="/our-teachers">Наши педагоги</Link>
          </li>
          <li className='menu-item'>
            <Link to="/news-and-ewent">Новости и мерприятия</Link>
          </li>
          <li>
            <div className='container-profil'>
              <Link to="/login">Войти</Link>
            </div>
          </li>
        </ul>
          
      </nav>
      )}
    </div>
    <ul className='header-nav'>
      <li className='menu-item'>
        <Link to="/about-center">О центре</Link>
      </li>
      <li className='menu-item'>
        <Link to="/about-course">О курсе</Link>
      </li>
      <li className='menu-item'>
        <Link to="/our-teachers">Наши педагоги</Link>
      </li>
      <li className='menu-item'>
        <Link to="/news-and-ewent">Новости и мерприятия</Link>
      </li>
      <li> 
        <div className='container-profil'>
          <Link to="/login" >
          Войти
          </Link>
        </div>
      </li>
    </ul>
    
    </header>
  );
};

export default Header;
