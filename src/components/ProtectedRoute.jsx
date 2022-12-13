import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';
import NavBar from './NavBar';
import TabBar from './TabBar';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  return (
    <>
      <NavBar />
      <Outlet />
      <TabBar />
    </>
  );
};

export default ProtectedRoute;
