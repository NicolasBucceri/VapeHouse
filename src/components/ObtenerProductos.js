import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const obtenerProductos = async () => {
  try {
    const productosSnapshot = await getDocs(collection(db, 'productos'));
    const productosList = productosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productosList;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw new Error('Error al obtener los productos');
  }
};

export default obtenerProductos;
