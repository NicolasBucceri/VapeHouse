import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const crearUsuarioAdmin = async (uid) => {
  try {
    await setDoc(doc(db, 'usuarios', uid), {
      rol: 'admin',
      // Otros campos necesarios
    });
    console.log('Usuario admin creado con éxito');
  } catch (error) {
    console.error('Error al crear el usuario admin:', error);
  }
};
