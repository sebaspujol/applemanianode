import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();

  // Array de objetos con los detalles de los iPhones
  const products = [
    { id: 1, name: 'iPhone 11', storage: '128 GB', price: 500 },
    { id: 2, name: 'iPhone 12', storage: '128 GB', price: 600 },
    { id: 3, name: 'iPhone 13', storage: '128 GB', price: 700 },
    { id: 4, name: 'iPhone 14', storage: '128 GB', price: 800 },
    { id: 5, name: 'iPhone 14', storage: '256 GB', price: 900 },
  ];

  // Buscar el iPhone correspondiente según el ID proporcionado en la URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail">
      <h2>Detalles del producto</h2>
      <p>Nombre: {product.name}</p>
      <p>Almacenamiento: {product.storage}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;
