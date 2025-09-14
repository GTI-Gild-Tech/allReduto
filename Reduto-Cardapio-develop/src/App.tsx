// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ProductsProvider } from "./components/context/ProductsContext";
import { CartProvider } from "./components/context/CartContext";
import { OrdersProvider } from "./components/context/OrdersContext";

import { AuthProvider, useAuth } from "./components/auth/AuthContext";
import { Login } from "./components/auth/Login"; // <- named export (combina com seu arquivo)

import { PublicSite } from "./components/public_site/PublicSite";
import { AdminRoute } from "./components/AdminRouter";
import { DashboardLayout } from "./components/DashboardLayout";

import { HomeContent } from "./components/home/HomeContent";
import PedidosContent from "./components/pedidos/PedidosContent";
import { FidelidadeContent } from "./components/fidelidade/FidelidadeContent";
import { CardapioContent } from "./components/cardapio/CardapioContent";

function AppInner() {
  // AGORA estamos dentro de <AuthProvider>, então é seguro usar o hook:
  const { login } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Área pública */}
        <Route path="/" element={<PublicSite />} />

        {/* Login do admin (passamos onLogin vindo do contexto) */}
        <Route path="/dashboard-admin/login" element={<Login onLogin={login} />} />

        {/* Área admin protegida */}
        <Route element={<AdminRoute />}>
          <Route path="/dashboard-admin" element={<DashboardLayout />}>
            {/* redireciona /dashboard-admin -> /dashboard-admin/home */}
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomeContent />} />
            <Route path="pedidos" element={<PedidosContent />} />
            <Route path="fidelidade" element={<FidelidadeContent />} />
            <Route path="cardapio" element={<CardapioContent />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <OrdersProvider>
            <AppInner />
          </OrdersProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}