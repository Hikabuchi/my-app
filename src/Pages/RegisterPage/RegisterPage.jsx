import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './RegisterPage.css';



const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      patronymic,
      email,
      password,
      repeatPassword,
    };

    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setLoading(true);
      // Тут нужно сделать отправку данных на сервер только потом когдп нибудь
      fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSuccess(true);
            setLoading(false);
          } else {
            setErrors({ general: 'Регистрация не удалась. Пожалуйста, попробуйте снова.' });
            setLoading(false);
          }
        })
        .catch((error) => {
          setErrors({ general: 'Регистрация не удалась. Пожалуйста, попробуйте снова.' });
          setLoading(false);
        });
    }
  };

  const validateFormData = (formData) => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'Требуется указать имя';
    }
    if (!formData.lastName) {
      errors.lastName = 'Требуется указать фамилию';
    }
    if (!formData.email) {
      errors.email = 'Требуется электронная почта';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Пожалуйста, введите действительный адрес электронной почты';
    }
    if (!formData.password) {
      errors.password = 'Требуется ввести пароль';
    } else if (formData.password.length < 8) {
      errors.password = 'Длина пароля должна составлять не менее 8 символов';
    }
    if (!formData.repeatPassword) {
      errors.repeatPassword = 'Требуется повторный ввод пароля';
    } else if (formData.repeatPassword !== formData.password) {
      errors.repeatPassword = 'Пароли не совпадают';
    }
    return errors;
  };

  return (
    <div className='body-register'>
        <Header />
        <main className='main'>
          <div className='register-container'>
          <div>
            <div className='h1-register'>
              <h1 className='h1-register-content'>Регистрация</h1>
            </div>
            {success ? (
              <div style={{ color: 'var(--color2)' }}>
                Регистрация прошла успешно! Пожалуйста, проверьте свой электронный адрес для подтверждения.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='form-register'>
                <label>Имя:</label><br />
                <input
                  className='input-register'
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div style={{ color: 'var(--error)' }}>{errors.firstName}</div>}
                <br />

                <label>Фамилия:</label><br />
                <input
                  className='input-register'
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <div style={{ color: 'var(--error)' }}>{errors.lastName}</div>}
                <br />

                <label>Отчество:</label><br />
                <input
                  className='input-register'
                  type="text"
                  value={patronymic}
                  onChange={(e) => setPatronymic(e.target.value)}
                />
                <br />

                <label>Email:</label><br />
                <input
                  className='input-register'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div style={{ color: 'var(--error)' }}>{errors.email}</div>}
                <br />

                <label>Создайте пароль:</label><br />
                <input
                  className='input-register'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div style={{ color: 'var(--error)' }}>{errors.password}</div>}
                <br />

                <label>Повторите пароль:</label><br />
                <input
                  className='input-register'
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {errors.repeatPassword && <div style={{ color: 'var(--error)' }}>{errors.repeatPassword}</div>}
                <br />
                <button type="submit" className='sumbit-register'>Зарегистрироваться</button>
              <p className='help-links-register'>
                  Есть учетная запись? <Link to="/login">Авторизоваться</Link>
              </p>
                {loading && <div>Загрузка...</div>}
              </form>
            )}
          </div>
        
        </div>
        </main>
        <Footer />
    </div>
  );
};

export default RegistrationPage;