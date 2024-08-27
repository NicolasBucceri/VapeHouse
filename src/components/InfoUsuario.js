// src/components/UserInfo.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserInfo = () => {
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

export default UserInfo;
