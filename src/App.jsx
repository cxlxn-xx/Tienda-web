import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { products } from './data/products';
import './App.css';

// Componente principal de la aplicación
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Obtener categorías únicas
  const categories = [...new Set(products.map(p => p.category))];

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Función para cambiar de sección
  const handleNavigate = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para filtrar por categoría
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  // Renderizar contenido según la sección activa
  const renderContent = () => {
    switch(activeSection) {
      case 'home':
      case 'products':
        return (
          <>
            {activeSection === 'home' && <Header />}
            <main className="main-content">
              <section className="products-section">
                <h2 className="section-title">
                  {selectedCategory === 'all' 
                    ? 'Nuestra Colección' 
                    : `Categoría: ${selectedCategory}`}
                </h2>
                <div className="products-grid">
                  {filteredProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              </section>
              <Cart 
                items={cartItems} 
                onRemove={removeFromCart}
              />
            </main>
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar 
        onNavigate={handleNavigate}
        activeSection={activeSection}
        categories={categories}
        onCategoryFilter={handleCategoryFilter}
      />
      {renderContent()}
      <WhatsAppButton cartItems={cartItems} />
    </div>
  );
}

export default App;