import React from 'react';
import './WhatsAppButton.css';

// Componente del botón flotante de WhatsApp
const WhatsAppButton = ({ cartItems }) => {
  // Generar mensaje de WhatsApp basado en los items del carrito
  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) {
      return "Hola! Quiero consultar sobre sus productos.";
    }

    let message = "Hola! Quiero realizar un pedido:\n\n";
    let total = 0;

    cartItems.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      message += `• ${item.name} (x${item.quantity}) - $${subtotal.toFixed(2)}\n`;
    });

    message += `\nTotal: $${total.toFixed(2)}`;
    return message;
  };

  const whatsappNumber = "5493482202436"; // Reemplaza con tu número de WhatsApp
  const message = encodeURIComponent(generateWhatsAppMessage());
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      title="Enviar mensaje por WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="30" height="30">
        <path fill="#ffffff" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.51 12.8c-.16.45-.92.85-1.29 1.02-.34.15-.78.26-3.51.26-2.73 0-5.13-.48-5.13-.48s-2.4-.48-5.13-.48c-2.73 0-3.17-.11-3.51-.26-.37-.17-1.13-.57-1.29-1.02-.16-.45-.16-1.23.16-1.68.32-.45.92-.85 1.29-1.02.34-.15.78-.26 3.51-.26 2.73 0 5.13.48 5.13.48s2.4.48 5.13.48c2.73 0 3.17.11 3.51.26.37.17 1.13.57 1.29 1.02.16.45.16 1.23-.16 1.68z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;