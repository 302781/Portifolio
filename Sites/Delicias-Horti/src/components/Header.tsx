import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  const linkStyle: React.CSSProperties = {
    color: 'white',
    marginRight: '1rem',
    textDecoration: 'none'
  };

  return (
    <header style={{ padding: '1rem', backgroundColor: '#4CAF50', color: 'white' }}>
      <h1>Delícias Horti</h1>
      <nav style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/receitas" style={linkStyle}>Receitas</Link>
        <Link to="/receitas/nova" style={linkStyle}>Nova Receita</Link>
        <Link to="/carrinho" style={linkStyle}>Carrinho</Link>

        {!user ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/cadastro" style={linkStyle}>Cadastro</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: '1rem' }}>Olá, <strong>{user}</strong>!</span>
            <button
              onClick={logout}
              style={{
                background: 'white',
                color: '#4CAF50',
                border: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

