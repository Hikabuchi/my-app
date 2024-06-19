import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slideshow from '../../components/Slideshow/Slideshow';
import News from '../../components/News/news';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className='main'>
        <section className="slider">
          <Slideshow />
        </section>
        <section className="About-curse">
            <div className="about-curse-img">
              <img src={require('../../assets/images/azis-pradana-c_5tdM3RifY-unsplash.jpg')} alt="Logo" className='logo'/>
            </div>
            <div className="about-curse_container">
                <h2 className="about-curse-h2">Основы управления БПЛА</h2>
                <p className="about-curse-p">Основы  управления БПЛА - это курс, предназначенный для тех, кто хочет освоить  технологии разработки и управления автономными летательными аппаратами.  Участники узнают о принципах работы беспилотников, основах аэронавтики и  программирования, а также научатся создавать собственные системы  управления и применять их на практике. В рамках курса рассматриваются  различные типы беспилотников, их возможности и ограничения, а также  перспективы развития данной отрасли.</p>
                <Link to="#" className='about-curse-link'><div >Хочу записаться</div></Link>
            </div>
        </section>
        <div className="inform-curse">
            <div className="inform-cart">
                <div className="inform-cart-top">Стоимость</div>
                <div className="inform-cart-button">Бесплатно</div>
            </div>
            <div className="inform-cart">
                <div className="inform-cart-top">Возраст</div>
                <div className="inform-cart-button">с&nbsp;12-17&nbsp;лет</div>
            </div>
            <div className="inform-cart">
                <div className="inform-cart-top">Мест&nbsp;в&nbsp;группе</div>
                <div className="inform-cart-button">12&nbsp;человек</div>
            </div>
          </div>
        <section>
            <h2>Новости<br />и мероприятия</h2>
            <News />
        </section>
      </main>
      
          
      
      <Footer />
    </div>
  );
};

export default HomePage;