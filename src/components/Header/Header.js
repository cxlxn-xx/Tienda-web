import React from 'react';
import './Header.css';

// Componente de encabezado con banner hero
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="logo">STYLE COOLL</h1>
          <p className="tagline">La moda que te define ✨</p>
          <p className="subtitle">Encuentra tu estilo perfecto</p>
        </div>
      </div>
      
      {/* Banner Hero con imagen */}
      <div className="hero-banner">
        <div className="hero-content">
          <h2 className="hero-title">CATÁLOGO</h2>
          <button className="hero-btn">
            VER TODO →
          </button>
        </div>
        <div className="hero-image-overlay"></div>
      </div>
    </header>
  );
};

export default Header;