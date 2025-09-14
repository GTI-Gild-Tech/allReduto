import { motion } from 'motion/react';
import { MenuItem } from './MenuItem';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  onAddToCart: (item: MenuItemType, size: 'P' | 'M', quantity: number) => void;
}

export function MenuSection({ title, items, onAddToCart }: MenuSectionProps) {
  return (
    <section className="w-full">
      {/* Section Title */}
      <motion.div 
        className=""
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 
          className="font-['Retrokia:Demo',sans-serif] text-[64px] text-[#0f4c50]"
          whileHover={{ scale: 1.02, x: 10 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
      </motion.div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
          >
            <MenuItem
              item={item}
              onAddToCart={onAddToCart}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}