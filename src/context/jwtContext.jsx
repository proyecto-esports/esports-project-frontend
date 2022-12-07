import { createContext, useState } from 'react';

export const JwtContext = createContext();

export const JwtContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem('token');
    return savedJwt || null;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const [editingGuitar, setEditingGuitar] = useState({});

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <JwtContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        logout,
        editingGuitar,
        setEditingGuitar,
      }}
    >
      {children}
    </JwtContext.Provider>
  );
};
