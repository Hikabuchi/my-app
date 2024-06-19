import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutCenterPage from './Pages/AboutCenterPage/AboutCenterPage';
import AboutCoursePage from './Pages/AboutCoursePage/AboutCoursePage';
import OurTeachersPage from './Pages/OurTeachersPage/OurTeachersPage';
import NewsAndEwent from './Pages/NewsAndEwent/NewsAndEwent';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PersonalAccount from './Pages/PersonalAccount/PersonalAccount';
import TaskForStudent from './Pages/TaskForStudent/TaskForStudent';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-center" element={<AboutCenterPage />} />
        <Route path="/about-course" element={<AboutCoursePage />} />
        <Route path="/our-teachers" element={<OurTeachersPage />} />
        <Route path="/news-and-ewent" element={<NewsAndEwent />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/personal-account" element={<PersonalAccount />} />
        <Route path="/task-for-student" element={<TaskForStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
