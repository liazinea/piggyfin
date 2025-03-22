import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token, isAuthenticated } = useAuth();

  // Verifica se o usuário está autenticado
  if (!isAuthenticated() || !token) {
    return <Navigate to="/" replace />; // Redireciona para /login
  }

  return <Outlet/>; // Renderiza o componente protegido
};

export default ProtectedRoute;