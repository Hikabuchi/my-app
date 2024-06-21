import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderPersonalAccount/HeaderPa';
import Footer from '../../components/Footer/Footer';
import './PesonalAccount.css';

const PersonalAccount = () => {
  
  return(
    <div>
      <Header />
      <main className='main'>
      <section id="inform-student" className='inform-student'>
            <div>
              <h1 className='h1-student'>Личный кабинет обучающегося</h1>
              <div className='student-inform-left'>
                <div className="photo-student">
                  <img src={require('../../assets/images/photo-user.png')} alt="photouser" className=''/>
                </div>
                <div>
                    <div className='student-name'>
                        <div>Иванов Иван иванович</div>
                        <img src={require('../../assets/icons/Interface-Essential-Wrench-2--Streamline-Pixel.png')} alt="Настройки" className=''/>
                    </div>
                    <div className='level-student'>Уровень: 1</div>
                </div>
              </div>
            </div>
            <div>
            <img src={require('../../assets/icons/Social-Rewards-Trends-Hot-Flame--Streamline-Pixel.png')} alt="g" className='Social-Rewards-img'/>
                <div className="scores-profil">Баллы: 15</div>
            </div>
        </section>
        <section>
           <div className="curses-student">
            <h2 className='h2-student'>Мой курс</h2>
            <section id="curse-bpla" className='curse-bpla'>
                 <Link to="/task-for-student"className='link-student'>
                    <h3 className='h3-student'>Курс основы управления БПЛА</h3>
                </Link>
                <div className="curse-content">
                    <div>
                        <span className='inform-about-task'>Актуальные задания:</span>
                    </div>
                        <div className="task-student task-one">
                            <div className='content-task-student'>
                                 <img src={require('../../assets/icons/School-Science-Graduation-Cap--Streamline-Pixel.png')} alt="Иконка" className='School-Science-img'/>
                                <div>
                                    <span>Устройство дрона</span>
                                </div>
                            </div>
                            <div className='content-task-student content-task-student-2'>
                               <div className="download">
                                    <img src={require('../../assets/icons/Internet-Network-Computer-Download--Streamline-Pixel.png')} alt="Иконка" className='Internet-Network-img'/> 
                                    <div>Скачать</div>
                                </div>
                                <div className="scores-task">
                                    <span className='scores-task-str'>Баллы за выполнение</span>
                                    <span className='scores-num'>10</span>
                                </div> 
                            </div>
                            
                        </div>
                    <div className="task-student task-two">
                        <div className='content-task-student'>
                            <img src={require('../../assets/icons/School-Science-Graduation-Cap--Streamline-Pixel.png')} alt="Иконка" className='School-Science-img'/>
                            <div>
                                <span>История появления первых летательных аппаратов</span>
                            </div>
                        </div>
                        <div className='content-task-student content-task-student-2'>
                            <div className="download">
                            <img src={require('../../assets/icons/Internet-Network-Computer-Download--Streamline-Pixel.png')} alt="Иконка" className='Internet-Network-img'/> 
                                <div>Скачать</div>
                            </div>
                            <div className="scores-task">
                                <span className='scores-task-str'>Баллы за выполнение</span>
                                <span className='scores-num'>10</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="progress_curse">
                    <span className='inform-about-task'>Прогресс обучения:</span>
                    <div className="life-line">
                        <div className="progress-line">10%</div>
                    </div>
                </div>
            </section>
        </div>
           
        </section>
         
      </main>
      <Footer />
    </div>
  );
};
export default PersonalAccount;