import { useState } from "react";
import { Product } from "../cardapio/KanbanComponents";
import { useProducts } from "../context/ProductsContext";
import backgroundImage from "../../assets/bg-home.svg";
import Card from "./Card";

// ⚠️ IMPORT CORRETO: default export do modal
import AddToCartModal from "../cart/AddToCartModal";
import { Printer } from "lucide-react"; // ícone do botão de imprimir
        {/* Utilitários de impressão (sem CSS externo) */}
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
        return `${label} - ${formatBRL(Number(s.price))}`;
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

  const getProductImages = () => {
    if (product.imageUrl?.trim()) {
      const value = product.imageUrl.trim();

      if (value.startsWith("[")) {
        try {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed)) {
            const normalized = parsed
              .map((item) => (typeof item === "string" ? item.trim() : ""))
              .filter(Boolean);
            if (normalized.length > 0) return normalized;
          }
        } catch {
          // ignore parse error and continue with other formats
        }
      }

      if (value.includes("||")) {
        const normalized = value
          .split("||")
          .map((item) => item.trim())
          .filter(Boolean);
        if (normalized.length > 0) return normalized;
      }

      return [value];
    }

  };

  const productImages = getProductImages();

  return (
    <Card
      name={product.name}
      pricesText={formatPrices()}
      description={product.description}
      imageSrc={getProductImage()}
      imageSources={productImages}
      imageAlt={product.name}
      onOrderClick={() => setIsModalOpen(true)}
      modal={(
        <AddToCartModal
          product={product}
          imageSources={productImages}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    />
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

  const visibleProducts = products.filter((p) => p.is_visible !== false);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  // Agrupar produtos por categoria
  const groupedProducts = categories.reduce((acc, category) => {
    acc[category] = visibleProducts.filter((p) => p.category === category);

    return acc;
  }, {} as Record<string, Product[]>);

  const filteredProducts =
  selectedCategory === "todos"
    ? visibleProducts
    : visibleProducts.filter((p) => p.category === selectedCategory);


  const handlePrint = () => window.print();

  return (
    <div id="homeForprint" className="pt-10">
      <style>{`
          #homeForprint{
            background-image: url(${backgroundImage});
            background-repeat: repeat;
            background-position: start;
          };
          @media print {
            .hide-on-print { display: none !important; }
            .show-on-print { display: block !important; }

            /* Esconde automaticamente cabeçalhos/rodapés/navigation do layout */
            nav, header, footer { display: none !important; }

            /* Opcional: remover sombras no papel */
            .shadow-md, .shadow-lg, .hover\\:shadow-lg { box-shadow: none !important; }
          }
        `}</style>
      <div className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-center justify-start min-h-px min-w-px px-3 md:px-8 py-[50px] relative shrink-0 w-full">
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
            className={`box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[25px] shrink-0 transition-all ${
              selectedCategory === "todos"
                ? "bg-[#0f4c50] text-white hover:bg-[#0d4247]"
                : "bg-[#f0eee9] border border-[#0f4c50] text-[#0f4c50] hover:bg-[#e4e1d8]"
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
              className={`box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[25px] shrink-0 transition-all ${
                selectedCategory === category
                  ? "bg-[#0f4c50] text-white hover:bg-[#0d4247]"
                  : "bg-[#f0eee9] border border-[#0f4c50] text-[#0f4c50] hover:bg-[#e4e1d8]"
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
    </div>
  );
}

export default HomeContent;