// src/components/navigation/Navbar.tsx
import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import NavButton from "./NavButton";
import CartSidebar from "../cart/CartSidebar";
import { useCart } from "../context/CartContext";

const formatBRL = (value: number) =>
  (Number.isFinite(value) ? value : 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const { items } = useCart(); // <- pegue somente o que existe

  // badge do carrinho (quantidade total)
  const itemsCount = useMemo(
    () => items.reduce((acc, it) => acc + (Number(it.quantity) || 0), 0),
    [items]
  );

  // subtotal em CENTAVOS (segundo nosso modelo novo)
  const subtotalCents = useMemo(
    () =>
      items.reduce(
        (acc, it) =>
          acc +
          (Number(it.unitPriceCents || 0) * Number(it.quantity || 0)),
        0
      ),
    [items]
  );

  // se seu CartContext estiver em reais, troque para:  formatBRL(subtotalReais)
  const subtotalLabel = formatBRL(subtotalCents / 100);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="flex justify-center">
      <nav className="flex lg:mx-[20%] mx-5 w-[70vh] items-center mt-6">
        <div className="mx-auto  rounded-full bg-white/90 p-2 shadow ">
          <div className="flex items-center gap-2 ">
            <Link to="/dashboard-admin/home" className="no-underline">
              <NavButton active={isActive("/dashboard-admin/home")}>
                Home
              </NavButton>
            </Link>

            <Link to="/dashboard-admin/pedidos" className="no-underline">
              <NavButton active={isActive("/dashboard-admin/pedidos")}>
                Pedidos
              </NavButton>
            </Link>

            <Link to="/dashboard-admin/fidelidade" className="no-underline">
              <NavButton active={isActive("/dashboard-admin/fidelidade")}>
                Fidelidade
              </NavButton>
            </Link>

            <Link to="/dashboard-admin/cardapio" className="no-underline">
              <NavButton active={isActive("/dashboard-admin/cardapio")}>
                Cardápio
              </NavButton>
            </Link>
          </div>
        </div>
        
          {/* Botão do carrinho */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="items-center gap-2 rounded-full lg:inline-flex hidden bg-white/90 px-3 py-2 text-[#0f4c50] shadow hover:bg-gray-50"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-sm font-medium">{subtotalLabel}</span>
            {itemsCount > 0 && (
              <span className="rounded-full bg-[#0f4c50] px-2 py-0.5 text-xs font-bold text-white">
                {itemsCount}
              </span>
            )}
          </button>
        </nav>
      

      {/* Sidebar do carrinho */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;
