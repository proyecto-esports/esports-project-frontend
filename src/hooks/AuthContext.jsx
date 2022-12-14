import { createContext, useContext, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', null);
  const navigate = useNavigate();

  const login = (data) => {
    try {
      const { user, accessToken } = data;
      setUser(user);
      setAccessToken(accessToken);
      // return <Navigate to="/dashboard" replace={true} />;
      // navigate('/dashboard', { replace: true });
      console.log('redirijo');
      navigate('/dashboard/ranking');
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    return <Navigate to="/" />;
    // navigate('/');
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
