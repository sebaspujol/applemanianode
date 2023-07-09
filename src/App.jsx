import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda de iPhones! Tenemos el mejor surtido de iPhones de todo CABA" />
    </div>
  );
};

export default App;