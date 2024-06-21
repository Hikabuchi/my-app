import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderPersonalAccount/HeaderPa';
import Footer from '../../components/Footer/Footer';
import imgEd from '../../assets/icons/School-Science-Graduation-Cap--Streamline-Pixel.png';
import imgpdf from '../../assets/icons/Internet-Network-Computer-Download--Streamline-Pixel.png';
import './TaskForStudent.css';

const JobFilter = () => {
  const [filter, setFilter] = useState('all');
  const [jobs] = useState([
    { id: 5,
        link: '',
        imageEd:imgEd, 
        title: 'История появления первых летательных аппаратов', 
        status: 'future', 
        content: 'Здравствуйте! Нам очень с Вами необходимо изучить данную тему, чтобы понять, как же появились первые летательные аппараты!', 
        imagePDF:imgpdf,
        scores: 10 
    },
    { id: 4,
        link: '',
        imageEd: imgEd, 
        title: 'История развития, область приминения', 
        status: 'future', content: '', 
        imagePDF:imgpdf ,
        scores: 10 
    },
    { id: 3,
        link: '', 
        imageEd: imgEd, 
        title: 'Устройство дрона', 
        status: 'active', 
        imagePDF:imgpdf,
        scores: 20  
    },
    { id: 2,
        link: '', 
        imageEd: imgEd, 
        title: 'История появления первых летательных аппаратов', 
        status: 'active', 
        imagePDF:imgpdf,
        scores: 10  
    },
    { id: 1,
        link: '',
        imageEd: imgEd, 
        title: 'Вводное занятие', 
        status: 'completed', 
        imagePDF:imgpdf,
        scores: 15  
    },
  ]); 

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    switch (filter) {
      case 'all':
        return true;
        case 'completed':
        return job.status === 'completed';
      case 'future':
        return job.status === 'future';
      case 'active':
        return job.status === 'active';
      default:
        return true;
    }
  });

  return (
    <div className='task-student-page'>
        <Header />
        <main className='main'>
            <div className='main-container-task'>
                <div className='back-link'>
                    <Link to="/personal-account">
                        <img src={require('../../assets/icons/Interface-Essential-Navigation-Left-Circle-1--Streamline-Pixel.png')} alt="home" className='Interface-Essential-img'/>
                    </Link>
                    <h1 className='h1-student-task'>Курс основы управления БПЛА</h1>
                </div>
                <div className='tasks-container'>
                    <div className='nawigation-tasks'>
                        <h2>Курс основы управления БПЛА</h2>
                        <select value={filter} onChange={handleFilterChange} className='select-task'>
                            <option value="all">Все задания курса</option>
                            <option value="active">Актуальные задания</option>
                            <option value="future">Предстоящие задания</option>
                            <option value="completed">Выполненные задания</option>
                        </select>
                    </div>
                    <div className='task-container'>   
                        {filteredJobs.map((job) => (
                            <div key={job.id} >
                                <Link to={job.link} className='cart-task-job'>
                                <div className='content-task'>
                                    <div>
                                        <img  src={job.imageEd} alt='Иконка' className='School-Science-img'/>
                                        <div className='status-task'>
                                            {job.status}
                                        </div>
                                    </div>
                                    <div className='size-content'>
                                        <div className='task-content'>
                                            <div>{job.title} 
                                                
                                            </div>
                                        </div>  
                                    <p>{job.content}</p>
                                    </div>
                                </div>
                            <div className='content-task-student-all'>
                                    <div className='DownloadPDF'>
                                        <img src={job.imagePDF} alt='Иконка' className='Internet-Network-img' />
                                        <span>Скачать</span>
                                    </div>
                                    <div className="scores-task">
                                        <span>Баллы за выполнение</span>
                                        <span>10</span>
                                    </div>
                            </div>
                                </Link>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        </main>
      <Footer />
    </div>
  );
};

export default JobFilter;