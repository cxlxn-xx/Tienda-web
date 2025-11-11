import React from 'react';
import './Contact.css';

const Contact = () => {
  const whatsappNumber = "1234567890"; // Reemplaza con tu número

  const handleWhatsAppClick = () => {
    const message = "Hola! Me gustaría obtener más información sobre sus productos.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <h3>WhatsApp</h3>
              <p>+54 9 11 1234-5678</p>
              <button className="contact-btn" onClick={handleWhatsAppClick}>
                Enviar Mensaje
              </button>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>info@fashionstore.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h3>Dirección</h3>
              <p>Calle Principal 123</p>
              <p>Ciudad, País</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div className="contact-details">
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envíanos un Mensaje</h2>
          <p className="form-description">
            ¿Tienes alguna pregunta? Completa el formulario y te responderemos por WhatsApp
          </p>
          
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;
            const whatsappMsg = `Hola! Mi nombre es ${name}.\nEmail: ${email}\nMensaje: ${message}`;
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
            e.target.reset();
          }}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>

      <div className="contact-social">
        <h2>Síguenos en Redes Sociales</h2>
        <div className="social-icons">
          <a href="#" className="social-icon facebook">📘 Facebook</a>
          <a href="#" className="social-icon instagram">📷 Instagram</a>
          <a href="#" className="social-icon twitter">🐦 Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;