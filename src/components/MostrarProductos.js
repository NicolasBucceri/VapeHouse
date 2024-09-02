// MostrarProductos.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté importado correctamente
import obtenerProductos from './ObtenerProductos';

const MostrarProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosList = await obtenerProductos();
        setProductos(productosList);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Productos Disponibles</h1>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4 d-flex justify-content-center">
            <Link to={`/producto/${producto.id}`} className="text-decoration-none"> {/* Enlaza a la página del producto */}
              <div className="card producto-card shadow-lg" style={{ width: '100%', maxWidth: '350px' }}>
                <div className="card-img-wrapper">
                  <img src={producto.imgURL} className="card-img-top" alt={producto.nombre} />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{producto.nombre}</h5>
                  <p className="card-text text-center">Precio: ${producto.precio}</p>
                  {producto.precioConDescuento && (
                    <p className="card-text text-center text-danger">Precio con Descuento: ${producto.precioConDescuento}</p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostrarProductos;
