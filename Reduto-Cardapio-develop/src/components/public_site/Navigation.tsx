import { motion } from "motion/react";
import { Button } from "./../ui/button";
import { ShoppingCart, Home as HomeIcon, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

type NavigationProps = {
  onOpenCart: () => void;
};

export function Navigation({ onOpenCart }: NavigationProps) {
const { itemsCount: cartCount } = useCart();


  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-10 flex justify-center pb-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <nav
        className="bg-[#c1a07b] rounded-bl-[50px] rounded-br-[50px] px-20 py-5 flex items-center gap-5"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Botão para Dashboard Admin */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Link to="/dashboard-admin/home">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 hover:bg-white/30 transition-colors duration-300"
              aria-label="Admin"
            >
              <ShieldAlert className="h-8 w-8 text-white" />
            </Button>
          </Link>
        </motion.div>

        {/* Botão Home (página atual) */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Link to="/">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 hover:bg-white/30 transition-colors duration-300"
              aria-label="Home"
            >
              <HomeIcon className="h-8 w-8 text-white" />
            </Button>
          </Link>
        </motion.div>

        {/* Carrinho */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/20 hover:bg-white/30 relative transition-colors duration-300"
            onClick={onOpenCart}
            aria-label={`Shopping cart ${cartCount > 0 ? `with ${cartCount} items` : "empty"}`}
          >
            <ShoppingCart className="h-8 w-8 text-white" />
            {cartCount > 0 && (
              <motion.span
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center"
                aria-hidden="true"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                key={cartCount}
              >
                <motion.span
                  key={cartCount}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {cartCount}
                </motion.span>
              </motion.span>
            )}
          </Button>
        </motion.div>
      </nav>
    </motion.nav>
  );
}