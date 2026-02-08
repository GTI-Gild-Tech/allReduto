//import { useDrag, useDrop } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";
import svgPaths from "../../imports/svg-sb6ezzbr86";



export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
  sizes: { size: string; price: number | string }[];
  imageUrl?: string;     // ← nova: imagem principal (data URL por enquanto)
  order?: number;        // ← ordem do produto dentro da categoria
}

function DeleteIcon() {
  return (
    <div className="size-[25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g>
          <path d={svgPaths.p20475380} fill="#7F1010" />
        </g>
      </svg>
    </div>
  );
}




function EditIcon() {
  return (
    <div className="size-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p2c6d4000} fill="#C1A07B" />
        </g>
      </svg>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
  onMove: (productId: string, newCategory: string) => void; // usado pela KanbanColumn quando drop entre categorias
  onReorder: (dragIndex: number, hoverIndex: number) => void;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export function ProductCard({ product, index, onMove, onReorder, onEdit, onDelete }: ProductCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'product',
    item: { id: product.id, category: product.category, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [product.id, product.category, index]);

  const [, drop] = useDrop(() => ({
    accept: 'product',
    hover: (item: { id: string; category: string; index: number }, monitor) => {
      if (!monitor.isOver({ shallow: true })) {
        return;
      }
      
      if (item.id === product.id) {
        return;
      }
      
      // Se for da mesma categoria, reordenar
      if (item.category === product.category) {
        const dragIndex = item.index;
        const hoverIndex = index;
        
        if (dragIndex === hoverIndex) {
          return;
        }
        
        // Chama reorder apenas uma vez
        onReorder(dragIndex, hoverIndex);
        
        // Atualiza o índice do item arrastado para evitar múltiplas chamadas
        item.index = hoverIndex;
      }
    },
  }), [product.id, product.category, index, onReorder]);

  const ref = (node: HTMLDivElement | null) => {
    drag(drop(node));
  };

const formatPrices = () =>
  product.sizes
    .map((s) => `\u00DAnico` === s.size
      ? `${s.size} - R$ ${Number(s.price).toFixed(2)}`
      : `${s.size} - R$ ${Number(s.price).toFixed(2)}`
    )
    .join(" | ");


  return (
    <div
      ref={ref}
      className={`bg-[#e4ddcd] box-border content-stretch flex flex-col gap-2 items-start justify-start px-[15px] py-5 relative rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12),0px_16px_32px_0px_rgba(0,0,0,0.08)] shrink-0 w-80 cursor-move transition-all duration-200 ${
        isDragging ? 'opacity-50 rotate-1 scale-105' : 'hover:shadow-lg'
      }`}
    >
      {/* Product name */}
      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-[259px]">
        <div className="font-['Rethink_Sans:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#0f4c50] text-[24px] w-full">
          <p className="leading-[1.5] line-clamp-2">{product.name}</p>
        </div>
      </div>

      {/* Price and action buttons */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#2f1b04] text-[14px] w-[168px]">
          <p className="leading-[1.4]">{formatPrices()}</p>
        </div>
        <div className="h-[25px] relative shrink-0 w-[49px] flex gap-0">
          <button
            onClick={() => onDelete(product.id)}
            className="hover:opacity-70 transition-opacity"
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => onEdit(product)}
            className="hover:opacity-70 transition-opacity"
          >
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

interface KanbanColumnProps {
  title: string;
  category: string;
  products: Product[];
  onMove: (productId: string, newCategory: string) => void;
  onReorder: (category: string, productId: string, newIndex: number) => void;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
  onDeleteCategory?: (category: string) => void;
  onEditCategory?: (category: string) => void;
  canDeleteCategory?: boolean;
}

export function KanbanColumn({ title, category, products, onMove, onReorder, onEdit, onDelete, onDeleteCategory, onEditCategory, canDeleteCategory }: KanbanColumnProps) {
  const handleReorder = (dragIndex: number, hoverIndex: number) => {
    if (dragIndex === hoverIndex) return;
    
    const draggedProduct = products[dragIndex];
    if (!draggedProduct) return;
    
    // Chamar apenas quando a posição mudar
    onReorder(category, draggedProduct.id, hoverIndex);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'product',
    drop: (item: { id: string; category: string }) => {
      if (item.category !== category) {
        onMove(item.id, category);
      }
    },
    collect: (monitor: { isOver: () => any; }) => ({
      isOver: monitor.isOver(),
    }),
  }), [category, onMove]);

  return (
    <div
      ref={drop}
      className={`bg-white relative rounded-[16px] shrink-0 transition-all duration-200 ${
        isOver ? 'ring-2 ring-[#0f4c50] ring-opacity-50' : ''
      }`}
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start overflow-clip p-[24px] relative">
        <div className="flex justify-between items-start w-full min-w-full group">
          <div className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#0f4c50] text-[37px]" style={{ width: "min-content" }}>
            <p className="leading-[44px]">{title}</p>
          </div>
          {onEditCategory && (
            <button
              onClick={() => onEditCategory(category)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C1A07B] hover:text-[#9d825e] p-1 rounded text-[16px] mt-2"
              title="Editar nome da categoria"
            >
              <EditIcon />
            </button>
          )}
        </div>
        
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onMove={onMove}
            onReorder={handleReorder}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}

        {products.length === 0 && (
          <div className="text-center text-[#999] text-[14px] py-8 border-2 border-dashed border-[#ddd] rounded-lg w-80 relative">
            <p>Nenhum produto nesta categoria</p>
            {canDeleteCategory && onDeleteCategory && (
              <button
                onClick={() => onDeleteCategory(category)}
                className="mt-3 text-red-500 hover:text-red-700 transition-colors text-[12px] underline"
              >
                Excluir categoria
              </button>
            )}
          </div>
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

// Novo componente para permitir arrastar categorias inteiras
interface DraggableCategoryColumnProps extends KanbanColumnProps {
  index: number;
  onReorderCategory: (categoryName: string, newIndex: number) => void;
}

export function DraggableCategoryColumn({ 
  title, 
  category, 
  products, 
  index,
  onMove, 
  onReorder, 
  onEdit, 
  onDelete, 
  onDeleteCategory, 
  onEditCategory, 
  canDeleteCategory,
  onReorderCategory 
}: DraggableCategoryColumnProps) {
  const [{ isDragging }, dragCategory] = useDrag(() => ({
    type: 'category',
    item: { category, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [category, index]);

  const [{ isOverCategory }, dropCategory] = useDrop(() => ({
    accept: 'category',
    hover: (item: { category: string; index: number }, monitor) => {
      if (!monitor.isOver({ shallow: true })) {
        return;
      }
      
      if (item.category === category) {
        return;
      }
      
      const dragIndex = item.index;
      const hoverIndex = index;
      
      if (dragIndex === hoverIndex) {
        return;
      }
      
      // Reordenar categorias
      onReorderCategory(item.category, hoverIndex);
      
      // Atualizar o índice do item arrastado
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOverCategory: monitor.isOver(),
    }),
  }), [category, index, onReorderCategory]);

  const ref = (node: HTMLDivElement | null) => {
    dragCategory(dropCategory(node));
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-200 ${
        isDragging ? 'opacity-50 scale-95' : ''
      } ${
        isOverCategory ? 'ring-2 ring-[#C1A07B] ring-opacity-50 rounded-[16px]' : ''
      }`}
      style={{ cursor: 'grab' }}
    >
      <KanbanColumn
        title={title}
        category={category}
        products={products}
        onMove={onMove}
        onReorder={onReorder}
        onEdit={onEdit}
        onDelete={onDelete}
        onDeleteCategory={onDeleteCategory}
        onEditCategory={onEditCategory}
        canDeleteCategory={canDeleteCategory}
      />
    </div>
  );
}