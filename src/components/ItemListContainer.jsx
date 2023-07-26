import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  // Array de objetos con los detalles de los iPhones
  const products = [
    { id: 1, name: 'iPhone 11', storage: '128 GB', price: 500 },
    { id: 2, name: 'iPhone 12', storage: '128 GB', price: 600 },
    { id: 3, name: 'iPhone 13', storage: '128 GB', price: 700 },
    { id: 4, name: 'iPhone 14', storage: '128 GB', price: 800 },
    { id: 5, name: 'iPhone 14', storage: '256 GB', price: 900 },
  ];

  return (
    <div className="item-list-container">
      <h2>¡Bienvenido a mi tienda de iPhones! Tenemos el mejor surtido de iPhones de todo CABA</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>
              <p>{product.name} - {product.storage}</p>
            </Link>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
