import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import './styles.css';
import LogoImg from './logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const submit = e => {
    e.preventDefault();
    login({ email, password }).catch(() =>
      notify('Usuário ou senha inválidos')
    );
  };

  return (
    <div className="login-container">
      <img src={LogoImg} alt="logo" />

      <form className="form" onSubmit={submit}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          autoComplete="password"
          type="password"
          value={password}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <Button> Entrar </Button>
      </form>

      <Notification />
    </div>
  );
};

export default Login;
