import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from "../../imports/svg-yafp8q3jr7";
import imgDrink from "./../../assets/6feb31b16ef07d8aad72ffc0a24969c050e5a069.png";

interface OrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  customerName?: string;
  tableNumber?: string;
  total?: number;
}

export function OrderSuccess({ isOpen, onClose, customerName, tableNumber, total }: OrderSuccessProps) {
  if (!isOpen) return null;

  const handleEvaluate = () => {
    window.open('https://share.google/KymJkgB4Jm5nZIIho', '_blank');
    onClose();
  };

  const formatPrice = (price?: number) =>
    (price ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal card (responsivo) */}
          <motion.div
            className="
              relative bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl
              rounded-2xl sm:rounded-3xl md:rounded-[40px]
              shadow-xl
              p-5 sm:p-8
            "
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-success-title"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute right-3 top-3 sm:right-5 sm:top-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full grid place-items-center hover:bg-black/5 transition"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Fechar"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 40 40">
                <path d={svgPaths.p26348400} fill="#5E6472" />
              </svg>
            </motion.button>

            {/* Content */}
            <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-2 text-center">
              {/* Ícone/ilustração */}
              <motion.div
                className="bg-center bg-cover bg-no-repeat mb-5"
                style={{ backgroundImage: `url('${imgDrink}')` }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 220 }}
                aria-hidden
              >
                {/* tamanhos responsivos */}
                <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48" />
              </motion.div>

              {/* Título */}
              <motion.h2
                id="order-success-title"
                className="font-['Roboto_Slab:Bold',_sans-serif] font-bold text-[#2f1b04]
                           text-xl sm:text-2xl md:text-3xl leading-snug"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                Pedido feito com sucesso!
              </motion.h2>

              {/* Subtítulo opcional com dados do pedido */}
              {(customerName || tableNumber || total !== undefined) && (
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-[#2f1b04]/80"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.35 }}
                >
                  {customerName && <span className="font-medium">{customerName}</span>} 
                  {customerName && tableNumber ? " • " : ""}
                  {tableNumber && <span>Mesa {tableNumber}</span>}
                  {(customerName || tableNumber) && total !== undefined ? " • " : ""}

                </motion.p>
              )}

              {/* Descrição */}
              <motion.p
                className="font-['Roboto_Slab:Medium',_sans-serif] font-medium text-[#2f1b04]
                           text-base sm:text-lg md:text-xl leading-relaxed max-w-[36rem]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35 }}
              >
                Mostre que gostou do nosso coffice! Nos avalie no Google.
              </motion.p>

              {/* Estrelas */}
              <motion.div
                className="flex gap-2 sm:gap-2.5 md:gap-3 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.35 }}
                aria-hidden
              >
                {[...Array(5).keys()].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.7 + i * 0.08,
                      duration: 0.35,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -8, 8, 0],
                      transition: { duration: 0.25 }
                    }}
                  >
                    <svg className="w-full h-full" fill="none" viewBox="0 0 35 35">
                      <path d={svgPaths.pb1da900} fill="#A68915" />
                    </svg>
                  </motion.div>
                ))}
              </motion.div>

              {/* Botão Avaliar */}
              <motion.button
                onClick={handleEvaluate}
                className="
                  w-full sm:w-80 md:w-[28rem]
                  py-3 mt-10 sm:py-4
                  rounded-full border border-[#0f4c50]
                  flex items-center justify-center
                  hover:bg-[#0f4c50]/5
                  transition-colors
                "
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.35 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span
                  className="font-['Roboto:Regular',_sans-serif] text-[#0f4c50]
                             text-base sm:text-lg md:text-xl"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Avaliar
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
