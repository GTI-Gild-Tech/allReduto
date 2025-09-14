import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth/AuthContext"; // Importe o hook do contexto

export function AdminRoute() {
  const { isAuthenticated } = useAuth();

  // Se o usuário não estiver autenticado, redireciona para a tela de login
  if (!isAuthenticated) {
    return <Navigate to="/dashboard-admin/login" replace />;
  }

  // Se estiver, permite o acesso às rotas filhas
  return <Outlet />;
}