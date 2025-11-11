import React from 'react';
import './Cart.css';

// Componente del carrito de compras
const Cart = ({ items, onRemove }) => {
  // Calcular el total del carrito
  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Formatear el mensaje para WhatsApp
  const formatWhatsAppMessage = () => {
    let message = "Hola! Quiero realizar un pedido:\n\n";
    items.forEach(item => {
      message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\nTotal: $${getTotal().toFixed(2)}`;
    return encodeURIComponent(message);
  };

  if (items.length === 0) {
    return (
      <div className="cart">
        <h3>Carrito de Compras</h3>
        <p className="empty-cart">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Carrito de Compras</h3>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">x{item.quantity}</span>
            </div>
            <div className="item-price">
              ${(item.price * item.quantity).toFixed(2)}
              <button 
                className="remove-btn"
                onClick={() => onRemove(item.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: ${getTotal().toFixed(2)}</strong>
      </div>
      <a
        href={`https://wa.me/5493482202436?text=${formatWhatsAppMessage()}`}
        className="whatsapp-order-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enviar pedido por WhatsApp
      </a>
    </div>
  );
};

export default Cart;