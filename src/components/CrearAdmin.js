// src/components/CrearAdmin.js
import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const CrearAdmin = () => {
  const crearAdmin = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, 'admin@example.com', 'adminPassword');
      const user = userCredential.user;

      // Crear el usuario con rol 'admin'
      await setDoc(doc(db, 'usuarios', user.uid), {
        rol: 'admin',
        // Otros campos necesarios
      });

      console.log('Administrador creado con éxito');
    } catch (error) {
      console.error('Error al crear el administrador:', error);
    }
  };

  return (
    <button onClick={crearAdmin}>Crear Administrador</button>
  );
};

export default CrearAdmin;
