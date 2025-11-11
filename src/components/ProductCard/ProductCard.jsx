// ✅ Catálogo de productos (solo datos)
export const products = [
  {
    id: 1,
    name: "Top Deportivo",
    price: 2500,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=500&fit=crop",
    category: "Tops",
    description: "Top ajustado ideal para cualquier ocasión"
  },
  {
    id: 2,
    name: "Jean Tiro Alto",
    price: 4500,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&h=500&fit=crop",
    category: "Jeans",
    description: "Jean clásico de tiro alto, súper cómodo"
  },
  {
    id: 3,
    name: "Remera Estampada",
    price: 2000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "Remeras",
    description: "Remera de algodón con diseño exclusivo"
  },
  {
    id: 4,
    name: "Vestido Corto",
    price: 3800,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    category: "Vestidos",
    description: "Vestido ideal para salir, súper trendy"
  },
  {
    id: 5,
    name: "Buzo Oversize",
    price: 3500,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    category: "Buzos",
    description: "Buzo cómodo y moderno, perfecto para el frío"
  },
  {
    id: 6,
    name: "Short de Jean",
    price: 2800,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    category: "Shorts",
    description: "Short de jean, ideal para el verano"
  },
  {
    id: 7,
    name: "Crop Top",
    price: 1800,
    image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop",
    category: "Tops",
    description: "Crop top súper trendy y versátil"
  },
  {
    id: 8,
    name: "Campera Denim",
    price: 5500,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop",
    category: "Camperas",
    description: "Campera de jean, un clásico que nunca pasa de moda"
  },
  {
    id: 9,
    name: "Conjunto Deportivo",
    price: 4200,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=500&fit=crop",
    category: "Conjuntos",
    description: "Conjunto completo para estar cómoda y con estilo"
  }
];

// ✅ Componente ProductCard (muestra un producto)
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <small>{product.category}</small>
      <p>{product.description}</p>
    </div>
  );
}
