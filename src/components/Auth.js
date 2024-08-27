// src/components/Auth.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './Login'; // Asegúrate de importar tu componente de inicio de sesión
import Logout from './Logout'; // Asegúrate de importar tu componente de cierre de sesión

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Limpiar el listener cuando el componente se desmonte
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenido, {user.email}</p>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Auth;
