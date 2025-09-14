import { X, Minus, Plus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './../ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './../ui/alert-dialog';
import svgPaths from "../../imports/svg-itpyg0wv3m";
import quantitySvgPaths from "../../imports/svg-27zwrw9n3n";
import { CartItem } from '../../data/menuData';
import { useState } from 'react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onClearCart: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, size: 'P' | 'M', newQuantity: number) => void;
  onRemoveItem: (id: number, size: 'P' | 'M') => void;
  onContinueOrder: () => void;
}

export function Cart({ isOpen, onClose, onClearCart, items, onUpdateQuantity, onRemoveItem, onContinueOrder }: CartProps) {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  
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

  return (
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
      
      {/* Cart Sidebar */}
      <motion.div 
        className="ml-auto bg-[#f0eee9] w-[585px] h-full relative overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Header */}
        <motion.div 
          className="pt-[55px] px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Back Arrow Icon */}
         
           
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="left-[19px] top-[34px] w-[35px] h-[35px] p-0 hover:bg-transparent transition-colors duration-200"
            >
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <path d={svgPaths.p1db27df0} fill="#0F4C50" />
              </svg>
            </Button>
         
          <div className="flex items-center justify-between">
            <motion.div 
              className="font-['Rethink_Sans:ExtraBold',sans-serif] font-extrabold text-[42px] text-[#0f4c50]"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Meu pedido
            </motion.div>
            <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
              <AlertDialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-12 h-12 p-0 hover:bg-transparent text-[11px] transition-colors duration-200"
                  >
                    <svg className="w-12 h-12" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p1d21dc0} fill="#7F1010" />
                    </svg>
                  </Button>
                </motion.div>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#f0eee9] border-[#0f4c50]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-[#0f4c50] font-['Rethink_Sans:Bold',sans-serif]">
                    Apagar carrinho?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-[#0f4c50] font-['Rethink_Sans:Regular',sans-serif]">
                    Tem certeza que deseja apagar o seu carrinho? Esta ação não pode ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-white text-[#0f4c50] border-[#0f4c50] hover:bg-gray-50 font-['Rethink_Sans:Medium',sans-serif]">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={() => {
                      onClearCart();
                      onClose();
                      setIsConfirmDialogOpen(false);
                    }}
                    className="bg-[#0f4c50] text-white hover:bg-[#0a3c3f] font-['Rethink_Sans:Medium',sans-serif]"
                  >
                    Sim, apagar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </motion.div>

        {/* Cart Content */}
        <motion.div 
          className="px-4 mt-[72px] pb-32"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {items.length === 0 ? (
            <motion.div 
              className="text-center py-12 text-gray-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p>Seu carrinho está vazio</p>
              <p className="text-sm mt-2">Adicione alguns itens deliciosos!</p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <AnimatePresence>
                {items.map((item, index) => (
                  <motion.div 
                    key={`${item.id}-${item.size}`} 
                    className="bg-[#fbfbfb] rounded-[10px] h-[116px] w-full p-[10px] flex items-center gap-[10px]"
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    layout
                  >
                    {/* Product Image */}
                    <motion.div 
                      className="bg-[#d9d9d9] rounded-[10px] w-[93px] h-[93px] flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  
                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-center gap-2 min-w-0">
                    <h3 className="font-['Rethink_Sans:Bold',_sans-serif] font-bold text-[24px] text-[#000000] leading-tight truncate">
                      {item.name}
                    </h3>
                    <div className="flex gap-4 font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[18px] text-[#797474]">
                      <span>
                        <span className="text-[#0f4c50]">P</span> {formatPrice(item.priceP)}
                      </span>
                      <span>
                        <span className="text-[#0f4c50]">M</span> {formatPrice(item.priceM)}
                      </span>
                    </div>
                  </div>

                  {/* Controls Section */}
                  <div className="flex flex-col gap-[10px] items-end">
                    {/* Size Selection */}
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex gap-2">
                        <div className={`w-[35px] h-[35px] rounded-[10px] flex items-center justify-center font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[20px] border ${
                          item.size === 'P' 
                            ? 'bg-[#0f4c50] text-white border-[#0f4c50]' 
                            : 'bg-white text-[#797474] border-[#d9d9d9]'
                        }`}>
                          P
                        </div>
                        <div className={`w-[35px] h-[35px] rounded-[10px] flex items-center justify-center font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[20px] border ${
                          item.size === 'M' 
                            ? 'bg-[#0f4c50] text-white border-[#0f4c50]' 
                            : 'bg-white text-[#797474] border-[#d9d9d9]'
                        }`}>
                          M
                        </div>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="bg-[#ffffff] relative rounded-[10px] h-[35px]">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[10px]"
                      />
                      <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex items-center justify-between px-[5px] py-0 relative size-full">
                          {/* Minus Button */}
                          <motion.button
                            onClick={() => {
                              if (item.quantity > 1) {
                                onUpdateQuantity(item.id, item.size, item.quantity - 1);
                              } else {
                                onRemoveItem(item.id, item.size);
                              }
                            }}
                            className="relative shrink-0 size-3.5 hover:bg-gray-100 rounded transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <g clipPath="url(#clip0_18_40)">
                                <path d={quantitySvgPaths.p25ae9580} fill="#0F4C50" stroke="#0F4C50" />
                              </g>
                              <defs>
                                <clipPath id="clip0_18_40">
                                  <rect fill="white" height="14" width="14" />
                                </clipPath>
                              </defs>
                            </svg>
                          </motion.button>

                          {/* Quantity Number */}
                          <motion.div 
                            className="bg-[#ffffff] h-6 overflow-clip relative shrink-0 w-[22px]"
                            key={item.quantity}
                            initial={{ scale: 1.2, color: "#0f4c50" }}
                            animate={{ scale: 1, color: "#000000" }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="absolute flex flex-col font-['Rethink_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#000000] text-[20px] text-center text-nowrap top-3 translate-x-[-50%] translate-y-[-50%]">
                              <p className="block leading-[0px] whitespace-pre">{item.quantity}</p>
                            </div>
                          </motion.div>

                          {/* Plus Button */}
                          <motion.button
                            onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                            className="relative shrink-0 size-3.5 hover:bg-gray-100 rounded transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <path d={quantitySvgPaths.p278a8d00} fill="#0F4C50" stroke="#0F4C50" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <AnimatePresence>
          {items.length > 0 && (
            <>
              {/* Total */}
              <motion.div 
                className="absolute left-[19px] bottom-[103px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[32px] text-black leading-[41px] tracking-[0.396px]">
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

              {/* Continue Order Button */}
              <motion.button
                onClick={onContinueOrder}  
                className="absolute left-0 bottom-0 w-[539px] h-[83px] bg-[#0f4c50] rounded-[43px] flex items-center justify-between px-[25px] py-[13px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-white leading-[26px] tracking-[-0.494px]">
                  Continuar pedido
                </div>
                <motion.div 
                  className="w-[35px] h-[35px]"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                    <path d={svgPaths.p1becc900} fill="white" />
                  </svg>
                </motion.div>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}