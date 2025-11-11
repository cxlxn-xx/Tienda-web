import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate, activeSection, categories, onCategoryFilter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategoryFilter(category);
    onNavigate('products');
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavigation('home')}>
          👕 Fashion Store
        </div>

        {/* Botón hamburguesa para móvil */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Menú de navegación */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a onClick={() => handleNavigation('home')}>Inicio</a>
          </li>
          <li className={activeSection === 'products' ? 'active' : ''}>
            <a onClick={() => handleNavigation('products')}>Productos</a>
          </li>
          
          {/* Menú desplegable de categorías */}
          <li className={`dropdown ${isCategoriesOpen ? 'open' : ''}`}>
            <a onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
              Categorías ▾
            </a>
            <ul className="dropdown-menu">
              <li>
                <a onClick={() => handleCategoryClick('all')}>Todos</a>
              </li>
              {categories.map((category, index) => (
                <li key={index}>
                  <a onClick={() => handleCategoryClick(category)}>{category}</a>
                </li>
              ))}
            </ul>
          </li>

          <li className={activeSection === 'about' ? 'active' : ''}>
            <a onClick={() => handleNavigation('about')}>Sobre Nosotros</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a onClick={() => handleNavigation('contact')}>Contacto</a>
          </li>
        </ul>

        {/* Indicador del carrito */}
        <div className="navbar-cart" onClick={() => handleNavigation('products')}>
          🛒
        </div>
      </div>
    </nav>
  );
};

export default Navbar;