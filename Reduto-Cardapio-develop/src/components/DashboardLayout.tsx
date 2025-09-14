// components/navigation/DashboardLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
// correto
import Navbar from "../components/navigation/Navbar";

export function DashboardLayout() {
  return (
    <div className="bg-[#f0eee9] h-screen">
      {/* Navbar fica sempre fixa dentro deste layout */}
      <Navbar />
      {/* O Outlet renderiza o componente da rota filha */}
      <Outlet />
      
    </div>
  );
}