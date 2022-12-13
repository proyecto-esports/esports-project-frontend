import { Navigate } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';
import NavBar from './NavBar';
import TabBar from './TabBar';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="login" />;
  // useEffect(() => !user && navigate('/login'));

  return (
    <>
      <NavBar />
      <Outlet />
      <TabBar />
    </>
  );
};

export default ProtectedRoute;
