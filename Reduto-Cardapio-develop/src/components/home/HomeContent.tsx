import { useState } from "react";
import { Product } from "../cardapio/KanbanComponents";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useProducts } from "../context/ProductsContext";

// ⚠️ IMPORT CORRETO: default export do modal
import AddToCartModal from "../cart/AddToCartModal";
import { Printer } from "lucide-react"; // ícone do botão de imprimir

// --- Helpers de formatação ---
const formatBRL = (v: number) =>
  (Number.isFinite(v) ? v : 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

interface MenuProductCardProps {
  product: Product;
}

function MenuProductCard({ product }: MenuProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrices = () => {
    // product.sizes: [{ size: string; price: number | string }]
    if (!Array.isArray(product.sizes) || product.sizes.length === 0) {
      return "Sem preço";
    }
    return product.sizes
      .map((s: any) => {
        const label = s.size ?? s.name ?? s.label ?? "Único";
        const priceNum = Number(s.price ?? s.price_cents / 100 ?? 0);
        return `${label} - ${formatBRL(priceNum)}`;
      })
      .join(" | ");
  };

  const getProductImage = () => {
    if (product.imageUrl) return product.imageUrl;

    switch (product.category) {
      case "Cappuccinos":
        return "https://images.unsplash.com/photo-1658646479124-bc31e6849497";
      case "Cafes":
        return "https://images.unsplash.com/photo-1612509590595-785e974ed690";
      case "Lanches":
        return "https://images.unsplash.com/photo-1673534409216-91c3175b9b2d";
      default:
        return "https://images.unsplash.com/photo-1509042239860-f550ce710b93";
    }
  };

  return (
    <div className="bg-white flex flex-col gap-4 p-6 rounded-[12px] shadow-md max-w-[320px] hover:shadow-lg transition-all">
      {/* Imagem */}
      <div className="w-full h-[180px] rounded-[8px] bg-[#f5f5f5] overflow-hidden">
        <ImageWithFallback
          src={getProductImage()}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nome */}
      <h3 className="font-semibold text-[#0f4c50] text-[20px]">{product.name}</h3>

      {/* Preços */}
      <p className="text-[#2f1b04] text-[14px]">{formatPrices()}</p>

      {/* Descrição — aparece só na impressão */}
      {product.description?.trim() ? (
        <p className="show-on-print text-[12px] text-gray-700 mt-1" style={{ display: "none" }}>
          {product.description}
        </p>
      ) : null}

      {/* Botão — escondido na impressão */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="hide-on-print bg-[#0f4c50] px-6 py-3 rounded-[8px] w-full text-white hover:bg-[#0d4247] transition-colors"
      >
        Fazer Pedido
      </button>

      {/* Modal */}
      <AddToCartModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

interface MenuCategoryProps {
  title: string;
  products: Product[];
}

function MenuCategory({ title, products }: MenuCategoryProps) {
  return (
    <div id="homeForPrint" className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      {/* Título da categoria */}
      <div className="font-[Retrokia] font-bold leading-[0] relative shrink-0 text-[#0f4c50] text-[32px]">
        <p className="leading-[1.2]">{title}</p>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <MenuProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export function HomeContent() {
  const { products, categories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  // Agrupar produtos por categoria
  const groupedProducts = categories.reduce((acc, category) => {
    acc[category] = products.filter((p) => p.category === category);
    return acc;
  }, {} as Record<string, Product[]>);

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handlePrint = () => window.print();

  return (
    <div id="homeForprint" className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-center justify-start min-h-px min-w-px px-8 py-[50px] relative shrink-0 w-full">
      {/* Utilitários de impressão (sem CSS externo) */}
      <style>{`
        @media print {
          .hide-on-print { display: none !important; }
          .show-on-print { display: block !important; }

          /* Esconde automaticamente cabeçalhos/rodapés/navigation do layout */
          nav, header, footer { display: none !important; }

          /* Opcional: remover sombras no papel */
          .shadow-md, .shadow-lg, .hover\\:shadow-lg { box-shadow: none !important; }
        }
      `}</style>

      {/* Título principal */}
      <div className="font-['Retrokia:Demo',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f4c50] md:text-5xl text-3xl text-center tracking-[-1.28px]">
        <p className="leading-[1.3] whitespace-pre font-[Retrokia] ">
          Nosso Cardapio
        </p>
      </div>

      {/* Subtítulo */}
      <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-sm text-center max-w-[600px]">
        <p className="leading-[1.5]">
          Descubra nossos sabores únicos e faça seu pedido. Cada produto é
          preparado com ingredientes selecionados para proporcionar a melhor
          experiência.
        </p>
      </div>

      {/* Filtros de categoria — não aparecem no cardápio (impressão) */}
      <div className="hide-on-print content-stretch flex gap-4 items-center justify-center relative shrink-0 flex-wrap">
        <button
          onClick={() => setSelectedCategory("todos")}
          className={`box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[25px] shrink-0 transition-all hover:opacity-80 ${
            selectedCategory === "todos"
              ? "bg-[#0f4c50] text-white"
              : "bg-transparent border border-[#0f4c50] text-[#0f4c50]"
          }`}
        >
          <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Todos</p>
          </div>
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[25px] shrink-0 transition-all hover:opacity-80 ${
              selectedCategory === category
                ? "bg-[#0f4c50] text-white"
                : "bg-transparent border border-[#0f4c50] text-[#0f4c50]"
            }`}
          >
            <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap">
              <p className="leading-[1.4] whitespace-pre">{category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Conteúdo do cardápio */}
      <div className="content-stretch flex flex-col gap-12 w-full max-w-[1129px] mx-auto px-4">
        {selectedCategory === "todos" ? (
          // Mostrar todas as categorias
          categories.map((category) => (
            <MenuCategory
              key={category}
              title={category}
              products={groupedProducts[category] ?? []}
            />
          ))
        ) : (
          // Mostrar apenas a categoria selecionada
          <MenuCategory title={selectedCategory} products={filteredProducts} />
        )}
      </div>

      {/* Botão de imprimir — pequeno, canto inferior direito; só desktop e não imprime */}
      <button
        onClick={handlePrint}
        aria-label="Imprimir"
        title="Imprimir"
        className="hide-on-print hidden md:flex fixed right-4 bottom-4 z-50 items-center justify-center p-2 rounded-full bg-[#0f4c50] text-white shadow-md hover:bg-[#0d4247] focus:outline-none"
      >
        <Printer className="w-5 h-5" />
      </button>
    </div>
  );
}

export default HomeContent;