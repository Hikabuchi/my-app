import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './AboutCoursePage.css';

const AboutCoursePage = () => {
  return(
    <div>
      <Header />
      <main className='main'>
        <h1>О курсе</h1>;
      </main>
      <Footer />
    </div>
  );
};
export default AboutCoursePage;