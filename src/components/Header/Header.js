import React from 'react';
import './Header.css';

// Componente de encabezado con el logo y título de la tienda
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">👕 Fashion Store</h1>
        <p className="tagline">Tu estilo, tu identidad</p>
      </div>
    </header>
  );
};

export default Header;