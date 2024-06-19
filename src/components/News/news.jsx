import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import image1 from '../../ass../../assets/images/drone.png';
import image2 from '../../ass../../assets/images/river.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, title: 'Новость', content: 'Прошли выездные съемки. Глянь что получтлось!', imeges: image1},
    { id: 2, title: 'Новость', content: 'Прошли выездные съемки. Глянь что получтлось!', imeges:  image2 },
    { id: 3, title: 'Новость', content: 'Прошли выездные съемки. Глянь что получтлось!', imeges: image1},
    { id: 4, title: 'Новость', content: 'Прошли выездные съемки. Глянь что получтлось!', imeges:  image2 },
    { id: 5, link: '/news-and-ewent', content: 'Еще новости', imeges:   false},

  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {cards.slice(currentIndex, currentIndex + 2).map((card) => (
          <div key={card.id} className="carousel-card">
            <Link to="/news-and-ewent">
              <div className='container-card-img'>
                <img src={card.imeges} alt={card.title} className={card.content}/>
              </div>
              <p>{card.content}</p>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} disabled={currentIndex === 0} className=''>
        
      </button>
      <button onClick={handleNext} disabled={currentIndex >= cards.length - 3}>
        Next
      </button>
    </div>
  );
};

export default Carousel;