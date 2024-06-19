import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './LoginPage.css'

const AuthorizationPage = () => {
  const [email, setEmail] = useState('tana@mail.ru');
  const [password, setPassword] = useState('123456789');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Успешная авторизация, перенаправление на страницу личного кабинета
  
    }
  };

  const validateFormData = (formData) => {
    let errors = {};
    if (!formData.email) {
      errors.email = 'Требуется электронная почта';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Неверный адрес электронной почты';
    }
    if (!formData.password) {
      errors.password = 'Требуется ввести пароль';
    } else if (formData.password.length < 8) {
      errors.password = 'Длина пароля должна составлять не менее 8 символов';
    }
    return errors;
  };

  return (
    <div className='body-login'>
      <Header />
      <main className='main'>
        <div  className='login-container'>
          <div>
            <div className='h1-login'>
              <h1 className='h1-content-login'>Авторизация</h1>
            </div>
            <form onSubmit={handleSubmit} className='form-login'>
              <label htmlFor='email' className='label-login'>Email:</label><br />
              <input className='input-login' id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div style={{ color: 'var(--error)'}}>{errors.email}</div>}
              <br />
              <label htmlFor='password' className='label-login'>Пароль:</label><br />
              <input className='input-login' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
              {errors.password && <div style={{ color: 'var(--error)'}}>{errors.password}</div>}
              <br/>
                <Link to="/personal-account" className='sumbit-login'>
                  Войти
                </Link>
              <p className='help-links-login'>
                <Link to="#">Не помню пароль</Link><br />
                    У вас нет учетной записи? 
                <Link to="/register">Зарегистрироваться</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorizationPage;