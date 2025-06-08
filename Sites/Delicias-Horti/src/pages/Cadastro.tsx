import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('registeredUser', username); // Simples simulação
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    }
  };

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nome de usuário" />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default Cadastro;
