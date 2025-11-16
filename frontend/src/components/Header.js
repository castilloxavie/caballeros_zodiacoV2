import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Caballeros del Zodiaco</h1>
      <nav className="nav">
        <Link to="/" className="btn btn-primary">Lista de Caballeros</Link>
        <Link to="/crear" className="btn btn-secondary">Crear Caballero</Link>
      </nav>
    </header>
  );
};

export default Header;
