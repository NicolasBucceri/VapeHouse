// src/components/DetalleProducto.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { db } from '../firebase/firebaseConfig'; 
import { collection, getDocs } from 'firebase/firestore'; 

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productosSnapshot = await getDocs(collection(db, 'productos'));
        
        const productoEncontrado = productosSnapshot.docs
          .map(doc => ({ idFirebase: doc.id, ...doc.data() }))
          .find(prod => prod.id === id);

        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setError('Error al obtener el producto');
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{producto.nombre}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={producto.imgURL} className="img-fluid mb-4" alt={producto.nombre} />
          <p><strong>Precio:</strong> ${producto.precio}</p>
          {producto.precioDesc && (
            <p><strong>Precio con Descuento:</strong> ${producto.precioDesc}</p>
          )}
          <p><strong>Descripción:</strong></p>
          <p>{producto.descripcion[0]?.descripcionParr1}</p>
          <p>{producto.descripcion[0]?.descripcionParr2}</p>
          <p>{producto.descripcion[0]?.descripcionParr3}</p>
          <p>{producto.descripcion[0]?.descripcionParr4}</p>

          {producto.descripcion[0]?.descripcionImg1 && (
            <img src={producto.descripcion[0].descripcionImg1} className="img-fluid mb-4" alt="Descripción" />
          )}
          {producto.descripcion[0]?.descripcionImg2 && (
            <img src={producto.descripcion[0].descripcionImg2} className="img-fluid mb-4" alt="Descripción" />
          )}
          {producto.descripcion[0]?.descripcionImg3 && (
            <img src={producto.descripcion[0].descripcionImg3} className="img-fluid mb-4" alt="Descripción" />
          )}
          {producto.descripcion[0]?.descripcionImg4 && (
            <img src={producto.descripcion[0].descripcionImg4} className="img-fluid mb-4" alt="Descripción" />
          )}

          {/* Verificar y mostrar especificaciones */}
          {producto.descripcion[0]?.descripcionEpecificaciones && (
            <div>
              <h5>Especificaciones:</h5>
              {producto.descripcion[0].descripcionEpecificaciones.map((spec, index) => (
                <p key={index}><strong>{Object.keys(spec)[0]}:</strong> {Object.values(spec)[0]}</p>
              ))}
            </div>
          )}

          {/* Verificar y mostrar contenido del kit */}
          {producto.descripcion[0]?.descripcionKit && (
            <div>
              <h5>{producto.descripcion[0].descripcionKit[0]?.tituloKit}</h5>
              <ul>
                {Object.entries(producto.descripcion[0].descripcionKit[0])
                  .filter(([key]) => key !== 'tituloKit')
                  .map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))
                }
              </ul>
            </div>
          )}

          {/* Verificar y mostrar sabores si están presentes */}
          {producto.descripcion[0]?.sabores && (
            <div>
              <h5>Sabores:</h5>
              {producto.descripcion[0].sabores.map((sabor, index) => (
                <p key={index}><strong>{sabor.titulo}:</strong> {sabor.descripcion}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
