'use client'; 
import style from './Login.module.scss'
import React, { useState } from 'react';
import { login } from '@/app/store/store';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className={style.container}>
      <h2>Окно авторизации</h2>
      <input 
        type="text" 
        placeholder="Имя пользователя..." 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Пароль..." 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default LoginPage;
