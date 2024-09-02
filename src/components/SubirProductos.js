import React from 'react';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const SubirProductos = () => {
  const subirProductos = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('No hay ningún usuario autenticado.');
      return;
    }

    console.log('Usuario actual:', user);

    // Verificar el rol del usuario
    const docRef = doc(db, 'usuarios', user.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log('Datos del usuario:', docSnap.data());

        // Verificar si el usuario es admin
        if (docSnap.data().rol === 'admin') {
          const productosCollection = collection(db, 'productos');

          try {
            // Leer el archivo JSON desde la carpeta `public`
            const response = await fetch('/productos.json');
            const productos = await response.json();

            // Subir cada producto a Firestore
            for (let producto of productos) {
              try {
                await addDoc(productosCollection, producto);
                console.log(`Producto ${producto.nombre} subido con éxito`);
              } catch (error) {
                console.error('Error al subir el producto:', error);
              }
            }
          } catch (error) {
            console.error('Error al leer el archivo JSON:', error);
          }
        } else {
          console.error('No tienes permisos para realizar esta acción');
        }
      } else {
        console.error('No se encontró el documento del usuario');
      }
    } catch (error) {
      console.error('Error al obtener el documento del usuario:', error);
    }
  };

  return (
    <div>
      <button onClick={subirProductos}>Subir Productos</button>
    </div>
  );
};

export default SubirProductos;
