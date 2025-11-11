import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px 0' }}>
      <h1>Caballeros del Zodiaco</h1>
      <nav>
        <Link to="/" className="btn btn-primary">Lista de Caballeros</Link>
        <Link to="/crear" className="btn btn-secondary">Crear Caballero</Link>
      </nav>
    </header>
  );
};

export default Header;
