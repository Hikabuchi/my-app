import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contacts">
        <h2 className='footer-h2'>Контакты</h2>
        <span>Телефон: <a href="mailto:+7 (953) 259-08-58">+7 (953) 259-08-58</a> </span>
        <span>e-mail: <a href="mailto:info@itcube19.ru">info@itcube19.ru</a> </span>
        <div className="icons">
          <Link to="https://vk.com/it_cubeabakan" className="icon"><img src={require('../../assets/icons/VK.png')} alt="vk" className='vk'/></Link>
        </div>
          <Link to="#">Пользовательское соглашение</Link>
          <Link to="#">Политика конфиденциальности</Link>
      </div>
      <div className="menu">
        <h2 className='footer-h2'>Меню</h2>
        <Link to="/about-center">О центре</Link>
        <Link to="/about-course">О курсе</Link>
        <Link to="/our-teachers">Наши педагоги</Link>
        <Link to="/news-and-ewent">Новости и мерприятия</Link>
        <Link to="/login">Войти</Link>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
      <div className="map">
        <iframe
          title="Yandex Map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a457ce196c94d8b14390a775fbffbefedbe265eee6928e29af390f65cd434b0&amp;source=constructor"
          width="300"
          height="300"
          frameBorder="0"
        />
      </div>
    </footer>
  );
};

export default Footer;