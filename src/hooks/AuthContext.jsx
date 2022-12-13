import { createContext, Navigate, useContext, useMemo } from 'react';

import useLocalStorage from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);

  const login = (data) => {
    setUser(data);
    return <Navigate to={('/', { replace: true })} />;
  };

  const logout = () => {
    setUser(null);
    return <Navigate to="/login" />;
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
