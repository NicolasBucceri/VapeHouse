import React from 'react';
import './App.css';
import ListaDeProductos from './components/ListaDeProductos';
import SubirProductos from './components/SubirProductos';
import Registro from './components/Registro';
import CrearAdmin from './components/CrearAdmin';
import MostrarProductos from './components/MostrarProductos';
import DetalleProducto from './components/DetalleProducto';
import RegistroInicio from './components/RegistroInicio';
import Navbar from './components/Navbar'; // Importa el nuevo componente Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Definición de Rutas */}
        <Routes>
          <Route path="/" element={<MostrarProductos />} />
          <Route path="/productos" element={<ListaDeProductos />} />
          <Route path="/subir-productos" element={<SubirProductos />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/crear-admin" element={<CrearAdmin />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/registro-inicio" element={<RegistroInicio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
