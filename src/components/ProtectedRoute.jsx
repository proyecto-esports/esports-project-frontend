import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';
import NavBar from './NavBar';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
