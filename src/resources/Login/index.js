import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();
    login({ email, password }).catch(() =>
      notify('Usuário ou senha inválidos')
    );
  };

  return (
    <div className='div'>
      <div className='div'>
        <form className='form' onSubmit={submit}>
          <div className="lockerDiv">
            <span className='locker'></span>
          </div>
          <div className='emailDiv'>
            <input
              className='input'
              name='email'
              type='email'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='passwordDiv'>
            <input
              className='input'
              name='password'
              autoComplete='password'
              type='password'
              value={password}
              placeholder='Senha'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='button'>Entrar</button>
        </form>

        <Notification />
      </div>
    </div>
  );
};

export default Login;
