// src/components/Registro.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Crear el usuario con rol 'admin'
      await setDoc(doc(db, 'usuarios', user.uid), {
        rol: 'admin',
        // Otros campos necesarios
      });

      console.log('Usuario registrado y rol asignado con éxito');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <form onSubmit={registrarUsuario}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Registro;
