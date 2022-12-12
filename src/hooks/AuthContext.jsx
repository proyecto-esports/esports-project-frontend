import { createContext, Navigate, useContext, useMemo } from 'react';

import useLocalStorage from './useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);

  const login = (data) => {
    setUser(data);
    return <Navigate to={('/home', { replace: true })} />;
  };

  const logout = () => {
    setUser(null);
    return <Navigate to="/login" />;
  };

  const value = useMemo(() => ({
    user,
    login,
    logout,
  }));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
