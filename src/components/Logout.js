// src/components/Logout.js
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {
  const cerrarSesion = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return <button onClick={cerrarSesion}>Cerrar Sesión</button>;
};

export default Logout;
