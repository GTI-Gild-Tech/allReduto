import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-xce247dcet";
import { OrderSuccess } from './OrderSuccess';
import { CartItem } from '../../data/menuData';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToCart: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export function Checkout({ isOpen, onClose, onBackToCart, items, onOrderComplete }: CheckoutProps) {
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName.trim() || !tableNumber.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setCustomerName('');
    setTableNumber('');
    onOrderComplete();
    onClose();
  };

  return (
    <>
      <motion.div 
        className="fixed inset-0 z-50 flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-black/10" 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        
        {/* Checkout Screen */}
        <motion.div 
          className="ml-auto bg-[#f0eee9] w-[585px] h-full relative overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          
          {/* Back Arrow Icon */}
          <motion.div 
            className="absolute left-[19px] top-[34px] w-[35px] h-[35px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.button 
              onClick={onBackToCart} 
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <path d={svgPaths.p1db27df0} fill="#0F4C50" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="absolute left-[19px] top-[55px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="font-['Rethink_Sans:ExtraBold',sans-serif] font-extrabold text-[42px] text-[#0f4c50] leading-[41px] tracking-[0.396px] w-[343px]">
              Meus dados
            </div>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <motion.div 
              className="absolute left-1/2 top-[127px] translate-x-[-50%] w-[525px] space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              
              {/* Customer Name Field */}
              <motion.div 
                className="bg-[rgba(255,255,255,0.59)] rounded-[10px] w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.01 }}
              >
                <div className="px-[30px] py-5 space-y-3">
                  <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[20px] text-black leading-[24px] w-full">
                    Como você gostaria de ser chamado(a)?
                  </div>
                  <div className="bg-[#fbfbfb] h-[62px] rounded-xl w-full relative">
                    <div className="absolute inset-[-1px] border border-[#dee0e3] border-solid rounded-[13px] pointer-events-none" />
                    <div className="flex items-center h-full px-[30px]">
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Digite aqui..."
                        className="w-full bg-transparent font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[20px] text-black leading-[24px] placeholder:text-[#6b7582] outline-none transition-all duration-200 focus:placeholder-opacity-50"
                        required
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Table Number Field */}
              <motion.div 
                className="bg-[rgba(255,255,255,0.59)] rounded-[10px] w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.01 }}
              >
                <div className="px-[30px] py-5 space-y-3">
                  <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[20px] text-black leading-[24px] w-full">
                    Em qual mesa você está?
                  </div>
                  <div className="bg-[#fbfbfb] h-[62px] rounded-xl w-full relative">
                    <div className="absolute inset-[-1px] border border-[#dee0e3] border-solid rounded-[13px] pointer-events-none" />
                    <div className="flex items-center h-full px-[30px]">
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="Digite aqui..."
                        className="w-full bg-transparent font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[20px] text-black leading-[24px] placeholder:text-[#6b7582] outline-none transition-all duration-200 focus:placeholder-opacity-50"
                        required
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Total */}
            <motion.div 
              className="absolute left-[19px] bottom-[103px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[32px] text-black leading-[41px] tracking-[0.396px] w-[343px]">
                <span className="font-['Rethink_Sans:Bold',sans-serif] font-bold">Total</span>
                <motion.span
                  key={getTotalPrice()}
                  initial={{ scale: 1.1, color: "#0f4c50" }}
                  animate={{ scale: 1, color: "#000000" }}
                  transition={{ duration: 0.3 }}
                >
                  : {formatPrice(getTotalPrice())}
                </motion.span>
              </div>
            </motion.div>

            {/* Finalize Order Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="absolute left-0 bottom-0 w-[539px] h-[83px] bg-[#0f4c50] rounded-[43px] flex items-center justify-between px-[25px] py-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <motion.div 
                className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-white leading-[26px] tracking-[-0.494px]"
                animate={isSubmitting ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                transition={isSubmitting ? { duration: 1, repeat: Infinity } : {}}
              >
                {isSubmitting ? 'Finalizando...' : 'Finalizar pedido'}
              </motion.div>
              <motion.div 
                className="w-[35px] h-[35px]"
                whileHover={{ x: isSubmitting ? 0 : 5 }}
                transition={{ duration: 0.2 }}
                animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                style={{ 
                  transition: isSubmitting ? "none" : "transform 0.2s ease" 
                }}
              >
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                  <path d={svgPaths.p3af3f600} fill="white" />
                </svg>
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <OrderSuccess
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        customerName={customerName}
        tableNumber={tableNumber}
        total={getTotalPrice()}
      />
    </>
  );
}