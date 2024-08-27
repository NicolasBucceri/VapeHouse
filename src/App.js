// src/App.js
import React from 'react';
import './App.css';
import ListaDeProductos from './components/ListaDeProductos';
import SubirProductos from './components/SubirProductos';
import Registro from './components/Registro';
import CrearAdmin from './components/CrearAdmin'; // Importa el componente de crear admin
import Auth from './components/Auth'; // Importa el componente de autenticación

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi E-commerce</h1>
      </header>
      <Auth /> {/* Agrega el componente de autenticación */}
      <ListaDeProductos />
      <SubirProductos />
      <Registro />
      <CrearAdmin /> {/* Solo para pruebas, no en producción */}
    </div>
  );
}

export default App;
