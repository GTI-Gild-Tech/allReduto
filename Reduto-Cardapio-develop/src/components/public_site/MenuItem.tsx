import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { MenuItem as MenuItemType } from '../../data/menuData';
import svgPaths from '../../imports/svg-1n7v4048sb';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType, size: 'P' | 'M', quantity: number) => void;
}

export function MenuItem({ item, onAddToCart }: MenuItemProps) {
  const [selectedSize, setSelectedSize] = useState<'P' | 'M' | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showCheck, setShowCheck] = useState(false);
  const [showSizeError, setShowSizeError] = useState(false);

  const formatPrice = (price: number) => {
    return `R$${price.toFixed(2).replace('.', ',')}`;
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Verificar se um tamanho foi selecionado
    if (!selectedSize) {
      setShowSizeError(true);
      setTimeout(() => {
        setShowSizeError(false);
      }, 2000);
      return;
    }

    onAddToCart(item, selectedSize, quantity);
    setQuantity(1);
    setSelectedSize(null); // Reset size selection
    
    // Mostrar animação de check
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 1500);
  };

  return (
    <motion.div 
      className="bg-[#fbfbfb] rounded-[10px] h-[116px] w-full p-[10px] flex items-center gap-[10px]"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
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
        <p className="font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[18px] text-[#000000] leading-tight truncate">
          {item.description}
        </p>
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
          <motion.div 
            className={`flex gap-2 ${showSizeError ? 'animate-pulse' : ''}`}
            animate={showSizeError ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => {
                setSelectedSize(selectedSize === 'P' ? null : 'P');
                setShowSizeError(false);
              }}
              className={`w-[35px] h-[35px] rounded-[10px] flex items-center justify-center font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[20px] border transition-colors ${
                selectedSize === 'P' 
                  ? 'bg-[#0f4c50] text-white border-[#0f4c50]' 
                  : showSizeError
                  ? 'bg-white text-red-500 border-red-500'
                  : 'bg-white text-[#797474] border-[#d9d9d9] hover:border-[#0f4c50] hover:text-[#0f4c50]'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={selectedSize === 'P' ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.2 }}
            >
              P
            </motion.button>
            <motion.button
              onClick={() => {
                setSelectedSize(selectedSize === 'M' ? null : 'M');
                setShowSizeError(false);
              }}
              className={`w-[35px] h-[35px] rounded-[10px] flex items-center justify-center font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[20px] border transition-colors ${
                selectedSize === 'M' 
                  ? 'bg-[#0f4c50] text-white border-[#0f4c50]' 
                  : showSizeError
                  ? 'bg-white text-red-500 border-red-500'
                  : 'bg-white text-[#797474] border-[#d9d9d9] hover:border-[#0f4c50] hover:text-[#0f4c50]'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={selectedSize === 'M' ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.2 }}
            >
              M
            </motion.button>
          </motion.div>
          {showSizeError && (
            <motion.p 
              className="text-red-500 text-xs font-['Rethink_Sans:Regular',_sans-serif]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Escolha um tamanho
            </motion.p>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="bg-white rounded-[10px] h-[35px] flex items-center px-[5px] border border-[#d9d9d9] gap-2">
          <motion.button 
            onClick={() => handleQuantityChange(-1)}
            className="w-[14px] h-[14px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-full h-full" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p25ae9580} fill="#6b7280" stroke="#6b7280" />
            </svg>
          </motion.button>
          
          <motion.div 
            className="w-[22px] h-6 flex items-center justify-center font-['Rethink_Sans:Regular',_sans-serif] font-normal text-[20px] text-[#000000]"
            key={quantity}
            initial={{ scale: 1.2, color: "#0f4c50" }}
            animate={{ scale: 1, color: "#000000" }}
            transition={{ duration: 0.3 }}
          >
            {quantity}
          </motion.div>
          
          <motion.button 
            onClick={() => handleQuantityChange(1)}
            className="w-[14px] h-[14px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-full h-full" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p278a8d00} fill="#6b7280" stroke="#6b7280" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Add Button */}
      <motion.button 
        onClick={handleAddToCart}
        className={`w-[53px] h-[116px] rounded-r-[10px] -mr-[10px] flex items-center justify-center transition-all duration-300 group ${
          showCheck 
            ? 'bg-green-500 hover:bg-green-600' 
            : showSizeError
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-[#a89c7f] hover:bg-[#9a8c6f]'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={showSizeError ? { x: [-3, 3, -3, 3, 0] } : {}}
        transition={{ duration: 0.2 }}
      >
        <div className="w-8 h-8 flex items-center justify-center relative">
          {/* Plus Icon */}
          <motion.svg 
            className="w-full h-full absolute" 
            fill="none" 
            viewBox="0 0 32 32"
            animate={showCheck ? { 
              opacity: 0, 
              scale: 0.75, 
              rotate: 90 
            } : { 
              opacity: 1, 
              scale: 1, 
              rotate: 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <path d={svgPaths.p383c5e00} fill="white" stroke="white" />
          </motion.svg>
          
          {/* Check Icon */}
          <motion.div
            animate={showCheck ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0 
            } : { 
              opacity: 0, 
              scale: 0.75, 
              rotate: 90 
            }}
            transition={{ duration: 0.3 }}
          >
            <Check className="w-6 h-6 absolute text-white" />
          </motion.div>
        </div>
      </motion.button>
    </motion.div>
  );
}