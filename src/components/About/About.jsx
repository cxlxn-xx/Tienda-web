import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Sobre Nosotros</h1>
        <p className="about-subtitle">Tu estilo, nuestra pasión</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="about-card">
            <div className="about-icon">🎯</div>
            <h2>Nuestra Misión</h2>
            <p>
              Ofrecer ropa de alta calidad a precios accesibles, combinando 
              estilo, comodidad y tendencias actuales para que todos puedan 
              expresar su personalidad a través de la moda.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">👁️</div>
            <h2>Nuestra Visión</h2>
            <p>
              Ser la tienda de ropa preferida, reconocida por nuestra calidad, 
              variedad y excelente servicio al cliente, expandiendo nuestra 
              presencia y marcando tendencia en el mercado.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">💎</div>
            <h2>Nuestros Valores</h2>
            <p>
              Calidad, honestidad, innovación y compromiso con nuestros clientes. 
              Cada prenda es seleccionada cuidadosamente para garantizar tu 
              satisfacción y confianza en nosotros.
            </p>
          </div>
        </section>

        <section className="about-features">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <h3>Calidad Garantizada</h3>
              <p>Productos verificados y de las mejores marcas</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <h3>Envío Rápido</h3>
              <p>Entrega en tiempo récord a todo el país</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💳</span>
              <h3>Pagos Seguros</h3>
              <p>Múltiples métodos de pago disponibles</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <h3>Atención 24/7</h3>
              <p>Soporte continuo vía WhatsApp</p>
            </div>
          </div>
        </section>

        <section className="about-story">
          <h2>Nuestra Historia</h2>
          <p>
            Iniciamos en 2020 con un sueño simple: hacer que la moda de calidad 
            sea accesible para todos. Lo que comenzó como una pequeña tienda 
            online se ha convertido en una comunidad de miles de clientes 
            satisfechos que confían en nosotros para renovar su guardarropa.
          </p>
          <p>
            Cada día trabajamos con pasión para seleccionar las mejores prendas, 
            seguir las últimas tendencias y, sobre todo, asegurarnos de que cada 
            cliente tenga una experiencia de compra excepcional.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;