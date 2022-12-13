import { createContext, Navigate, useContext, useMemo } from 'react';

import useLocalStorage from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);

  const login = (data) => {
    const { user, accessToken } = data;
    setUser(user);
    setAccessToken(accessToken);
    return <Navigate to="/" replace={true} />;
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    return <Navigate to="/login" />;
  };

  const value = useMemo(
    () => ({
      user,
      accessToken,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
