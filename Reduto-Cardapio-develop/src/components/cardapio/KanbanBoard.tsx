import { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableCategoryColumn, Product } from "./KanbanComponents";
import { useProducts } from "../context/ProductsContext";
import svgPaths from "../../imports/svg-gf3getow1k";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Plus, Download } from "lucide-react";

type PriceType = 'Tamanho' | 'Porção' | 'Único';
const ORDERED_SIZES = ['P', 'M', 'G'] as const;

interface CustomOption {
  id: string;
  name: string;
  quantity: number;
  price: string;
}

interface EditProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  // ⬇️ passa também o arquivo (opcional) para o pai
  onSave: (product: Product, imageFile?: File) => void;
}

// em CardapioContent.tsx (ou onde fica o botão)
export const handleExport = () => {
  const url = new URL('/dashboard-admin/home', window.location.origin);
  url.searchParams.set('print', '1'); // flag para ativar o auto-print
  window.open(url.toString(), '_blank', 'width=1000,height=800');
};

function BadgeOption({ 
  children, 
  isSelected, 
  onClick 
}: { 
  children: React.ReactNode; 
  isSelected: boolean; 
  onClick: () => void; 
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex gap-2.5 items-center justify-center px-4 py-2.5 relative rounded-[4px] shrink-0 transition-all hover:opacity-80 ${
        isSelected ? 'bg-[#0f4c50]' : 'bg-transparent'
      }`}
    >
      <div aria-hidden="true" className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className={`font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap ${
        isSelected ? 'text-white' : 'text-[#0f4c50]'
      }`}>
        <p className="leading-[1.4] whitespace-pre">{children}</p>
      </div>
    </button>
  );
}

function SizeOption({ 
  size, 
  isSelected, 
  onClick 
}: { 
  size: string; 
  isSelected: boolean; 
  onClick: () => void; 
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex gap-2.5 items-center justify-center px-4 py-2.5 relative rounded-[4px] shrink-0 transition-all hover:opacity-80 ${
        isSelected ? 'bg-[#0f4c50]' : 'bg-transparent'
      }`}
    >
      <div aria-hidden="true" className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className={`font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap ${
        isSelected ? 'text-white' : 'text-[#0f4c50]'
      }`}>
        <p className="leading-[1.4] whitespace-pre">Tamanho {size}</p>
      </div>
    </button>
  );
}

function QuantityControl({ 
  value, 
  onChange 
}: { 
  value: number; 
  onChange: (value: number) => void; 
}) {
  return (
    <div className="inline-flex h-11 items-center rounded-lg border border-[#d6d6d6] bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="h-full px-4 text-lg text-[#0f4c50] hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-white rounded-lg"
        aria-label="Diminuir"
        disabled={value <= 1}
      >
        –
      </button>
      <span className="grid h-full min-w-[2.2rem] place-items-center text-center text-sm font-semibold text-[#0f4c50]">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-full px-4 text-lg text-[#0f4c50] hover:bg-gray-50 rounded-lg"
        aria-label="Aumentar"
      >
        +
      </button>
    </div>
  );
}

function EditProductModal({ product, isOpen, onClose, onSave, categories }: EditProductModalProps & { categories: string[] }) {
  const parseImageList = (value?: string) => {
    if (!value?.trim()) return [] as string[];
    const normalized = value.trim();

    if (normalized.startsWith("[")) {
      try {
        const parsed = JSON.parse(normalized);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item) => (typeof item === "string" ? item.trim() : ""))
            .filter(Boolean);
        }
      } catch {
        // ignore parse error and continue with fallback formats
      }
    }

    if (normalized.includes("||")) {
      return normalized.split("||").map((item) => item.trim()).filter(Boolean);
    }

    return [normalized];
  };

  const [formData, setFormData] = useState({
    name: '',
    category: categories[0] || 'Cappuccinos',
    description: '',
    priceType: 'Tamanho' as PriceType,
    selectedSizes: ['M', 'G'] as string[],
    sizePrices: { P: '', M: '', G: '' } as Record<string, string>,
    customOptions: [] as CustomOption[],
    uniquePrice: '',
    imageUrl: '' as string,
    is_visible: true,
  });

  useEffect(() => {
  if (product) {
    const selectedSizes = product.sizes
      .map(s => s.size)
      .filter((size): size is typeof ORDERED_SIZES[number] => ORDERED_SIZES.includes(size as typeof ORDERED_SIZES[number]))
      .sort((a, b) => ORDERED_SIZES.indexOf(a) - ORDERED_SIZES.indexOf(b));

    setFormData({
      name: product.name,
      category: product.category,
      description:  product.description ?? '',
      priceType: 'Tamanho',
      selectedSizes: selectedSizes.length > 0 ? selectedSizes : ['P'],
      sizePrices: product.sizes.reduce((acc, size) => ({ ...acc, [size.size]: String(size.price) }), {} as Record<string, string>),
      customOptions: [],
      uniquePrice: '',
      imageUrl: product.imageUrl ?? '',
      is_visible: (product as any).is_visible ?? true,

    });
  } else {
    setFormData({
      name: '',
      category: categories[0] || 'Cappuccinos',
      description: '',
      priceType: 'Tamanho',
      selectedSizes: ['P'],
      sizePrices: { P: '', M: '', G: '' },
      customOptions: [],
      uniquePrice: '',
      imageUrl: '',
      is_visible: true,

    });
  }
}, [product, isOpen, categories]);

  // --- NOVO: guardamos o arquivo (pra mandar ao backend) ---
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageGallery, setImageGallery] = useState<string[]>([]);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);
  const [dragOverImageIndex, setDragOverImageIndex] = useState<number | null>(null);
  const [highlightedImageIndex, setHighlightedImageIndex] = useState<number | null>(null);

  const handleSave = () => {
  if (!formData.name || !formData.category) return;

  let sizes: { size: string; price: string }[] = [];
  if (formData.priceType === 'Tamanho') {
    sizes = formData.selectedSizes
      .filter(size => formData.sizePrices[size])
      .map(size => ({ size, price: formData.sizePrices[size] }));
  } else if (formData.priceType === 'Porção') {
    sizes = formData.customOptions
      .filter(option => option.price)
      .map(option => ({ size: option.name, price: option.price }));
  } else {
    sizes = [{ size: 'Único', price: formData.uniquePrice }];
  }
  if (sizes.length === 0) return;

  const base = product ? { ...product } : {};
  const orderedImages = imageGallery.filter(Boolean);
  const serializedImage =
    orderedImages.length <= 1
      ? (orderedImages[0] ?? formData.imageUrl ?? "")
      : JSON.stringify(orderedImages);
  const fileForUpload = orderedImages.length <= 1 ? (imageFile || undefined) : undefined;

  onSave({
    ...base,
    ...formData,
    id: product?.id || Date.now().toString(),
    sizes,
    imageUrl: serializedImage || product?.imageUrl || '',
  } as Product, fileForUpload);

  onClose();
};

  const toggleSize = (size: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSizes: ORDERED_SIZES.filter(option =>
        option === size ? !prev.selectedSizes.includes(size) : prev.selectedSizes.includes(option)
      ) as string[]
    }));
  };

  const updateSizePrice = (size: string, price: string) => {
    setFormData(prev => ({
      ...prev,
      sizePrices: { ...prev.sizePrices, [size]: price }
    }));
  };

  const addCustomOption = () => {
    const newOption: CustomOption = {
      id: Date.now().toString(),
      name: `Opção ${formData.customOptions.length + 1}`,
      quantity: 1,
      price: ''
    };
    setFormData(prev => ({
      ...prev,
      customOptions: [...prev.customOptions, newOption]
    }));
  };

  const updateCustomOption = (id: string, field: 'name' | 'quantity' | 'price', value: string | number) => {
    setFormData(prev => ({
      ...prev,
      customOptions: prev.customOptions.map(option =>
        option.id === id ? { ...option, [field]: value } : option
      )
    }));
  };

  const removeCustomOption = (id: string) => {
    setFormData(prev => ({
      ...prev,
      customOptions: prev.customOptions.filter(option => option.id !== id)
    }));
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onPickImage = () => fileInputRef.current?.click();
  const [isCropping, setIsCropping] = useState(false);
  const [rawImage, setRawImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  async function getCroppedImg(imageSrc: string, pixelCrop: {x:number;y:number;width:number;height:number}) {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = imageSrc;
    });

    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas não suportado");

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // gera dataURL PNG
    return canvas.toDataURL("image/png");
  }

  // helper: converte dataURL -> File
  function dataURLtoFile(dataUrl: string, filename = 'image.png'): File {
    const arr = dataUrl.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : 'image/png';
    const bstr = atob(arr[1] || '');
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  }

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;
    const okTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!files.every((file) => okTypes.includes(file.type))) {
      alert("É aceito apenas os formatos JPG, PNG e WEBP.");
      e.target.value = "";
      return;
    }

    const remainingSlots = Math.max(0, 5 - imageGallery.length);
    if (remainingSlots === 0) {
      alert("O limite máximo é de 5 imagens.");
      e.target.value = "";
      return;
    }

    const toDataUrl = (file: File) =>
      new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Falha ao ler imagem."));
        reader.readAsDataURL(file);
      });

    try {
      const imageDataUrls = (await Promise.all(files.slice(0, remainingSlots).map(toDataUrl))).filter(Boolean);
      if (imageDataUrls.length === 0) return;

      if (files.length > remainingSlots) {
        alert(`Você pode adicionar no máximo 5 imagens. Foram adicionadas apenas as primeiras ${remainingSlots}.`);
      }

      setImageGallery((prev) => {
        const next = [...prev, ...imageDataUrls];
        const first = next[0] ?? "";
        setFormData((current) => ({ ...current, imageUrl: first }));
        return next;
      });

      setPreviewImageIndex((prev) => (prev < 0 ? 0 : prev));
      setImageFile(files.length === 1 ? files[0] : null);
    } catch {
      alert("Não foi possível carregar as imagens selecionadas.");
    } finally {
      e.target.value = "";
    }
  };

  const moveImage = (index: number, direction: "left" | "right") => {
    setImageGallery((prev) => {
      const target = direction === "left" ? index - 1 : index + 1;
      if (target < 0 || target >= prev.length) return prev;

      const next = [...prev];
      const [moved] = next.splice(index, 1);
      next.splice(target, 0, moved);

      const first = next[0] ?? "";
      setFormData((current) => ({ ...current, imageUrl: first }));
      setPreviewImageIndex((current) => {
        if (current === index) return target;
        if (current === target) return index;
        return current;
      });

      return next;
    });
  };

  const reorderImage = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;

    setImageGallery((prev) => {
      if (fromIndex < 0 || fromIndex >= prev.length || toIndex < 0 || toIndex >= prev.length) {
        return prev;
      }

      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);

      const first = next[0] ?? "";
      setFormData((current) => ({ ...current, imageUrl: first }));
      setPreviewImageIndex((current) => {
        if (current === fromIndex) return toIndex;

        if (fromIndex < toIndex && current > fromIndex && current <= toIndex) {
          return current - 1;
        }

        if (fromIndex > toIndex && current >= toIndex && current < fromIndex) {
          return current + 1;
        }

        return current;
      });

      return next;
    });
  };

  const removeImageAt = (index: number) => {
    setImageGallery((prev) => {
      const next = prev.filter((_, i) => i !== index);
      const first = next[0] ?? "";
      setFormData((current) => ({ ...current, imageUrl: first }));
      setPreviewImageIndex((current) => Math.max(0, Math.min(current, next.length - 1)));
      if (next.length !== 1) {
        setImageFile(null);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const initialImages = parseImageList(product?.imageUrl ?? "");
    setImageGallery(initialImages);
    setPreviewImageIndex(0);
    setDraggedImageIndex(null);
    setDragOverImageIndex(null);
    setHighlightedImageIndex(null);
  }, [isOpen, product?.id, product?.imageUrl]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#f9f8f5] max-w-full md:max-w-[1200px] min-h-[700px] w-full md:w-[1200px] max-h-[90vh] overflow-y-auto p-4 md:p-8">
        <DialogHeader className="pb-6">
          <DialogTitle className="font-['Retrokia:Demo',_sans-serif] text-[#0f4c50] text-[24px]">
            {product ? 'Editar Produto' : 'Novo Produto'}
          </DialogTitle>
          <DialogDescription className="font-['Rethink_Sans:Regular',_sans-serif] text-[#797474] text-[14px]">
            {product ? 'Edite as informações do produto abaixo.' : 'Preencha as informações para criar um novo produto.'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="content-stretch flex flex-col md:flex-row gap-4 md:gap-8 items-start md:justify-center justify-start relative shrink-0 px-0 md:px-6 pb-4">
          {/* Left column - Basic info */}
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full md:flex-1 md:min-w-0">
            {/* Nome */}
            <div className="relative shrink-0 w-full">
              <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] mb-2 text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] whitespace-pre">Nome</p>
              </div>
              <div className="h-[44px] relative rounded-[5px] w-full">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full h-full px-4 border border-[#b5b5b5] rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] text-[14px] font-['Open_Sans:Regular',_sans-serif]"
                  placeholder="Nome do produto"
                />
              </div>
            </div>

            {/* Categoria */}
            <div className="relative shrink-0 w-full">
              <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] mb-2 text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] whitespace-pre">Categoria</p>
              </div>
              <div className="h-[44px] relative rounded-[5px] w-full">
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full h-full px-4 border border-[#b5b5b5] rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] text-[14px] font-['Open_Sans:Regular',_sans-serif]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Visibilidade no cardápio do cliente */}
<div className="relative shrink-0 w-full">
  <div
    className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] mb-2 text-[13px] text-black tracking-[0.52px]"
    style={{ fontVariationSettings: "'wdth' 100" }}
  >
    <p className="leading-[normal] whitespace-pre">Mostrar no cardápio do cliente</p>
  </div>

  <label className="flex items-center gap-3 text-[14px] font-['Open_Sans:Regular',_sans-serif]">
    <button
      type="button"
      role="switch"
      aria-checked={!!formData.is_visible}
      aria-label="Mostrar no cardápio do cliente"
      onClick={() =>
        setFormData((prev) => ({ ...prev, is_visible: !prev.is_visible }))
      }
      className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
        formData.is_visible ? "bg-[#0f4c50]" : "bg-[#9ca3af]"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          formData.is_visible ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
    <span className="text-[#0f4c50]">
      {formData.is_visible ? "Visível" : "Oculto"}
    </span>
  </label>
</div>


            {/* Descrição */}
            <div className="relative shrink-0 w-full">
              <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] mb-2 text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] whitespace-pre">Descrição</p>
              </div>
              <div className="relative rounded-[5px] w-full">
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full min-h-[120px] px-4 py-3 border border-[#b5b5b5] rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] text-[14px] font-['Open_Sans:Regular',_sans-serif] resize-y"
                  placeholder="Descrição do produto"
                />
              </div>
            </div>

          </div>

          {/* Right column - Price options */}
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full md:flex-1 md:min-w-0">
            {/* Tamanho ou quantidade */}
            <div className="relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start relative w-full">
                <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] text-[13px] text-black tracking-[0.52px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">Tamanho, porção ou único</p>
                </div>
                <div className="box-border content-stretch flex gap-3 h-12 items-center justify-start px-0 relative shrink-0 w-full">
                  <BadgeOption 
                    isSelected={formData.priceType === 'Tamanho'} 
                    onClick={() => setFormData(prev => ({ ...prev, priceType: 'Tamanho' }))}
                  >
                    Tamanho
                  </BadgeOption>
                  <BadgeOption 
                    isSelected={formData.priceType === 'Porção'} 
                    onClick={() => setFormData(prev => ({ ...prev, priceType: 'Porção' }))}
                  >
                    Porção
                  </BadgeOption>
                  <BadgeOption 
                    isSelected={formData.priceType === 'Único'} 
                    onClick={() => setFormData(prev => ({ ...prev, priceType: 'Único' }))}
                  >
                    Único
                  </BadgeOption>
                </div>
              </div>
            </div>

            {/* Conditional content based on price type */}
            {formData.priceType === 'Tamanho' && (
              <>
                {/* Selecione as opções */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start relative w-full">
                    <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[normal] whitespace-pre">Selecione as opções</p>
                    </div>
                    <div className="box-border content-stretch flex gap-3 h-12 items-center justify-start relative shrink-0 w-full">
                      <SizeOption 
                        size="P" 
                        isSelected={formData.selectedSizes.includes('P')} 
                        onClick={() => toggleSize('P')} 
                      />
                      <SizeOption 
                        size="M" 
                        isSelected={formData.selectedSizes.includes('M')} 
                        onClick={() => toggleSize('M')} 
                      />
                      <SizeOption 
                        size="G" 
                        isSelected={formData.selectedSizes.includes('G')} 
                        onClick={() => toggleSize('G')} 
                      />
                    </div>
                  </div>
                </div>

                {/* Valor das opções */}
                <div className="h-auto relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start relative w-full">
                    <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] text-[13px] text-black tracking-[0.52px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[normal]">Valor das opções</p>
                    </div>
                    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                      {formData.selectedSizes.map(size => (
                        <div key={size} className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                          <div className="relative flex h-[42px] w-[110px] shrink-0 items-center justify-center rounded-[6px] border border-[#0f4c50] bg-white px-3">
                            <div aria-hidden="true" className="absolute border border-[#0f4c50] border-solid inset-0 pointer-events-none rounded-[2px]" />
                            <div className="font-['Rethink_Sans:Regular',_sans-serif] text-[14px] font-normal leading-none relative shrink-0 text-[#0f4c50] text-nowrap">
                              <p className="leading-[1.4] whitespace-pre">Tamanho {size}</p>
                            </div>
                          </div>
                          <div className="relative h-[42px] flex-1">
                            <input
                              type="text"
                              value={formData.sizePrices[size] || ''}
                              onChange={(e) => updateSizePrice(size, e.target.value)}
                              className="h-full w-full rounded-[6px] border border-[#d2d7d7] bg-white px-4 text-[14px] font-['Open_Sans:Regular',_sans-serif] text-[#111827] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#0f4c50] focus:ring-2 focus:ring-[#0f4c50]/10"
                              placeholder="0,00"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {formData.priceType === 'Porção' && (
              <>
                {/* Criar opções */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start relative w-full">
                    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
                      <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[normal] whitespace-pre">Crie as opções</p>
                      </div>
                      <button
                        onClick={addCustomOption}
                        className="relative shrink-0 size-4 hover:opacity-70 transition-opacity"
                      >
                        <div className="absolute inset-[-20%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                            <path d={svgPaths.p27262900} fill="#0F4C50" stroke="#0F4C50" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
                      {formData.customOptions.map(option => (
                        <div key={option.id} className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-3 py-3 relative rounded-[8px] shrink-0 w-full border border-[#d2d7d7] bg-white">
                          
                          {/* Primeira linha: Nome da opção e excluir */}
                          <div className="content-stretch flex flex-wrap gap-3 items-center justify-between relative shrink-0 w-full">
                            <div className="relative flex h-[42px] w-[130px] shrink-0 items-center justify-center rounded-[6px] border border-[#0f4c50] bg-white px-3">
                              <div className="font-['Rethink_Sans:Regular',_sans-serif] text-[14px] font-normal leading-none text-[#0f4c50] text-nowrap">
                                <p className="leading-[1.4] whitespace-pre">{option.name}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeCustomOption(option.id)}
                              className="h-[42px] rounded-[6px] border border-[#f3caca] bg-[#fff5f5] px-3 text-[13px] font-medium text-[#b42318] transition-colors hover:bg-[#ffe9e9]"
                            >
                              Excluir
                            </button>
                          </div>

                          {/* Segunda linha: Quantidade e valor */}
                          <div className="content-stretch flex flex-nowrap gap-4 items-center justify-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                              <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-1.5 relative rounded-[2px] shrink-0 bg-[#f0f0f0]">
                                <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[12px] text-nowrap">
                                  <p className="leading-[1.2] whitespace-pre">Quantidade</p>
                                </div>
                              </div>
                              <QuantityControl
                                value={option.quantity}
                                onChange={(value) => updateCustomOption(option.id, 'quantity', value)}
                              />
                            </div>

                            <div className="content-stretch flex gap-3 items-center justify-start relative flex-1 min-w-0 overflow-hidden">
                              <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-1.5 relative rounded-[2px] shrink-0 bg-[#f0f0f0]">
                                <div className="font-['Rethink_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#797474] text-[12px] text-nowrap">
                                  <p className="leading-[1.2] whitespace-pre">Valor:</p>
                                </div>
                              </div>
                              <input
                                type="text"
                                value={option.price}
                                onChange={(e) => updateCustomOption(option.id, 'price', e.target.value)}
                                className="h-[42px] flex-1 min-w-0 w-full rounded-[6px] border border-[#d2d7d7] bg-white px-4 text-[14px] font-['Open_Sans:Regular',_sans-serif] text-[#111827] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#0f4c50] focus:ring-2 focus:ring-[#0f4c50]/10"
                                placeholder="0,00"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {formData.priceType === 'Único' && (
              <div className="h-auto relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start relative w-full">
                  <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] text-[13px] text-black tracking-[0.52px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[normal]">Preço único</p>
                  </div>
                  <div className="h-[44px] relative rounded-[5px] w-full">
                    <input
                      type="text"
                      value={formData.uniquePrice}
                      onChange={(e) => setFormData(prev => ({ ...prev, uniquePrice: e.target.value }))}
                      className="w-full h-full px-4 border border-[#b5b5b5] rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] text-[14px] font-['Open_Sans:Regular',_sans-serif]"
                      placeholder="0,00"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Imagens do produto */}
            <div className="relative shrink-0 w-full border-t pt-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal] whitespace-pre">Imagens do produto</p>
                </div>
                <div className="rounded-full bg-[#0f4c50]/10 px-2.5 py-1 text-[11px] font-medium text-[#0f4c50]">
                  {imageGallery.length} {imageGallery.length === 1 ? "imagem" : "imagens"}
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                className="hidden"
                onChange={onImageChange}
              />

              <div className="rounded-[10px] border border-[#d8dfdf] bg-white p-3 ">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="text-[12px] text-[#5f6666]">
                    Arraste para ordenar. A primeira imagem sera usada como capa.
                  </div>

                  {imageGallery.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setImageGallery([]);
                        setPreviewImageIndex(0);
                        setFormData(prev => ({ ...prev, imageUrl: '' }));
                        setImageFile(null);
                      }}
                      className="rounded-full bg-[#fee2e2] px-3 py-1 text-[11px] font-medium text-[#7f1d1d] hover:bg-[#fecaca]"
                    >
                      Limpar
                    </button>
                  ) : (
                    <span className="text-[11px] text-[#797474]">Selecione uma ou varias imagens</span>
                  )}
                </div>

                <div className="flex flex-nowrap gap-3 overflow-x-auto pb-1">
                  {imageGallery.map((img, index) => (
                    <div
                      key={`${img.slice(0, 24)}-${index}`}
                      draggable
                      onDragStart={() => setDraggedImageIndex(index)}
                      onDragOver={(e) => e.preventDefault()}
                      onDragEnter={() => setDragOverImageIndex(index)}
                      onDrop={() => {
                        if (draggedImageIndex === null) return;
                        reorderImage(draggedImageIndex, index);
                        setDraggedImageIndex(null);
                        setDragOverImageIndex(null);
                      }}
                      onDragEnd={() => {
                        setDraggedImageIndex(null);
                        setDragOverImageIndex(null);
                      }}
                      className={`relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[16px] border cursor-move transition-all duration-200 ${
                        draggedImageIndex === index ? "opacity-60" : ""
                      } ${
                        dragOverImageIndex === index ? "-translate-y-1 border-[#0f4c50] ring-2 ring-[#0f4c50]/30" : ""
                      } ${
                        previewImageIndex === index ? "border-[#0f4c50] ring-2 ring-[#0f4c50]/20" : "border-[#d6d6d6]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (previewImageIndex === index) {
                            setHighlightedImageIndex(index);
                            return;
                          }
                          setPreviewImageIndex(index);
                        }}
                        className="h-full w-full"
                        title={
                          previewImageIndex === index
                            ? `Imagem ${index + 1} (clique para ampliar)`
                            : `Imagem ${index + 1}`
                        }
                      >
                        <img src={img} alt={`Imagem ${index + 1}`} className="h-full w-full object-cover" />
                      </button>

                      <div className="absolute left-1 top-1 rounded bg-black/60 px-1 text-[10px] text-white">
                        {index + 1}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-0.5 bg-black/45 p-0.5">
                        <button
                          type="button"
                          onClick={() => moveImage(index, "left")}
                          disabled={index === 0}
                          className="rounded px-1 text-[10px] text-white disabled:opacity-40"
                          title="Mover para a esquerda"
                        >
                          ←
                        </button>
                        <span className="px-0.5 text-[9px] text-white/80">::</span>
                        <button
                          type="button"
                          onClick={() => moveImage(index, "right")}
                          disabled={index === imageGallery.length - 1}
                          className="rounded px-1 text-[10px] text-white disabled:opacity-40"
                          title="Mover para a direita"
                        >
                          →
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeImageAt(index)}
                        className="absolute right-0.5 top-0.5 rounded bg-black/55 px-1 text-[10px] text-white"
                        title="Remover imagem"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  {imageGallery.length < 5 && (
                    <button
                      type="button"
                      onClick={onPickImage}
                      className="group flex h-[88px] w-[88px] flex-col items-center justify-center rounded-[16px] border border-dashed border-[#d0d5d9] bg-[#f3f4f6] text-center transition-all hover:-translate-y-0.5 hover:border-[#8c959d] hover:bg-[#eceff1]"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-[#9aa3ab] text-white transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#7f8992]">
                        <Plus className="h-5 w-5" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Buttons */}
        <div className="flex justify-center gap-4 pt-8 pb-4 px-6 flex-wrap ">
          <button
            onClick={onClose}
            className="border border-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[50px] shrink-0 hover:bg-[#f0f0f0] transition-colors min-w-[80px]"
          >
            <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-base text-center text-nowrap text-[#0f4c50] tracking-[0.2px]" >
              <p className="leading-none whitespace-pre">Cancelar</p>
            </div>
          </button>
          <button
            onClick={handleSave}
            className="bg-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[50px] shrink-0 hover:bg-[#0d4247] transition-colors min-w-[80px]"
          >
            <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-base text-center text-nowrap text-white tracking-[0.2px]" >
              <p className="leading-none whitespace-pre">{product ? 'Concluir edição' : 'Finalizar cadastro'}</p>
            </div>
          </button>
        </div>

        {highlightedImageIndex !== null && imageGallery[highlightedImageIndex] && (
          <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setHighlightedImageIndex(null)}
              aria-hidden
            />

            <div className="relative z-10 w-full max-w-[980px]">
              <button
                type="button"
                onClick={() => setHighlightedImageIndex(null)}
                className="absolute right-2 top-2 rounded-md bg-black/65 px-3 py-1 text-sm text-white hover:bg-black/80"
              >
                Fechar
              </button>

              <div className="overflow-hidden rounded-xl border border-white/20 bg-black shadow-2xl">
                <img
                  src={imageGallery[highlightedImageIndex]}
                  alt={`Imagem ${highlightedImageIndex + 1} em destaque`}
                  className="max-h-[80vh] w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Cropper overlay (dentro do EditProductModal) */}
          {isCropping && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative bg-white rounded-lg shadow-xl w-[90vw] max-w-[520px] p-4">
                <h3 className="text-[#0f4c50] font-semibold mb-3">Ajuste a imagem (1:1)</h3>

                <div className="relative w-full h-[320px] bg-[#f0f0f0] rounded-md overflow-hidden">
                  <Cropper
                    image={rawImage || undefined}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={(_, area) => setCroppedAreaPixels(area)}
                    showGrid={false}
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm text-gray-700">Zoom</label>
                  <input
                    type="range"
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setIsCropping(false);
                      setRawImage(null);
                      setZoom(1);
                      setCrop({ x: 0, y: 0 });
                    }}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={async () => {
                      if (!rawImage || !croppedAreaPixels) return;
                      const croppedDataUrl = await getCroppedImg(rawImage, croppedAreaPixels);
                      // preview pro usuário
                      setImageGallery((prev) => {
                        const next = [croppedDataUrl, ...prev.filter((img) => img !== croppedDataUrl)];
                        setPreviewImageIndex(0);
                        setFormData(current => ({ ...current, imageUrl: next[0] ?? '' }));
                        return next;
                      });
                      // arquivo real (PNG) pra subir no backend
                      const safeName = (imageFile?.name || 'crop.png').replace(/\.[^.]+$/, '.png');
                      const fileFromCrop = dataURLtoFile(croppedDataUrl, safeName);
                      setImageFile(fileFromCrop);

                      setIsCropping(false);
                      setRawImage(null);
                      setZoom(1);
                      setCrop({ x: 0, y: 0 });
                    }}
                    className="px-4 py-2 rounded-md bg-[#0f4c50] hover:bg-[#0d4247] text-white"
                  >
                    Cortar
                  </button>
                </div>
              </div>
            </div>
          )}

      </DialogContent>
    </Dialog>
  );
}

export function KanbanBoard() {
  const { 
    products, 
    categories, 
    addProduct,
    updateProduct,
    deleteProduct,
    moveProduct,
    reorderProducts,
    addCategory,
    updateCategory,
    deleteCategory,
    reorderCategories
  } = useProducts();
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<string>('');
  const [newCategoryName, setNewCategoryName] = useState('');

  // Refs para sincronizar scroll horizontal no topo e no conteúdo
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const topScrollInnerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Sincronizar scroll entre o topo e o conteúdo principal
  const handleMainScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (topScrollRef.current) {
      topScrollRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft;
    }
  }, []);

  const handleTopScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft;
    }
  }, []);

  // Sincronizar largura do elemento interno da barra de scroll com o conteúdo
  useEffect(() => {
    const updateContentWidth = () => {
      if (scrollContainerRef.current && topScrollInnerRef.current) {
        const width = scrollContainerRef.current.scrollWidth;
        setContentWidth(width);
        topScrollInnerRef.current.style.width = width + 'px';
      }
    };

    updateContentWidth();
    window.addEventListener('resize', updateContentWidth);
    const observer = new ResizeObserver(updateContentWidth);
    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateContentWidth);
      observer.disconnect();
    };
  }, [categories]);

  // Garantir que todas as categorias sejam sempre visíveis
  useEffect(() => {
    // Este efeito garante que quando as categorias mudarem, 
    // o componente será re-renderizado com todas as categorias visíveis
  }, [categories]);

  const handleMoveProduct = (productId: string, newCategory: string) => {
    console.log('KanbanBoard.handleMoveProduct:', { productId, newCategory });
    moveProduct(productId, newCategory).catch(err => {
      console.error('Error in handleMoveProduct:', err);
      alert('Erro ao mover produto: ' + (err.message || 'Erro desconhecido'));
    });
  };

  const handleReorderProducts = (category: string, productId: string, newIndex: number) => {
    console.log('KanbanBoard.handleReorderProducts:', { category, productId, newIndex });
    
    // Debounce: cancelar chamadas anteriores pendentes
    if ((window as any).__reorderTimeout) {
      clearTimeout((window as any).__reorderTimeout);
    }
    
    // Aguardar 100ms antes de enviar para o backend (para agrupar múltiplas mudanças)
    (window as any).__reorderTimeout = setTimeout(() => {
      reorderProducts(category, productId, newIndex).catch(err => {
        console.error('Error in handleReorderProducts:', err);
        alert('Erro ao reordenar produto: ' + (err.message || 'Erro desconhecido'));
      });
    }, 100);
  };

  const handleReorderCategories = (categoryName: string, newIndex: number) => {
    console.log('KanbanBoard.handleReorderCategories:', { categoryName, newIndex });
    
    // Debounce: cancelar chamadas anteriores pendentes
    if ((window as any).__reorderCategoryTimeout) {
      clearTimeout((window as any).__reorderCategoryTimeout);
    }
    
    // Aguardar 100ms antes de enviar para o backend (para agrupar múltiplas mudanças)
    (window as any).__reorderCategoryTimeout = setTimeout(() => {
      reorderCategories(categoryName, newIndex).catch(err => {
        console.error('Error in handleReorderCategories:', err);
        alert('Erro ao reordenar categoria: ' + (err.message || 'Erro desconhecido'));
      });
    }, 100);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  // ⬇️ agora recebe o arquivo opcional vindo do modal
  const handleSaveProduct = (updatedProduct: Product, imageFile?: File) => {
    if (!products.find(p => p.id === updatedProduct.id)) {
      addProduct(updatedProduct, imageFile);   // cria com foto (FormData se vier file)
    } else {
      updateProduct(updatedProduct, imageFile); // atualiza com foto (FormData se vier file)
    }
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      deleteProduct(productId);
    }
  };

  const handleAddNewProduct = () => {
    setEditingProduct(null);
    setIsEditModalOpen(true);
  };

 
  const handleAddNewCategory = () => {
    setNewCategoryName('');
    setIsCategoryModalOpen(true);
  };

  const handleSaveCategory = () => {
    if (!newCategoryName.trim()) return;
    
    // Verificar se a categoria já existe
    if (categories.includes(newCategoryName.trim())) {
      alert('Esta categoria já existe!');
      return;
    }
    
    // Adicionar nova categoria
    addCategory(newCategoryName.trim());
    
    setIsCategoryModalOpen(false);
    setNewCategoryName('');
  };

  const handleCancelCategory = () => {
    setIsCategoryModalOpen(false);
    setNewCategoryName('');
  };

  const handleDeleteCategory = (categoryToDelete: string) => {
    const productsInCategory = products.filter(p => p.category === categoryToDelete);
    
    if (productsInCategory.length > 0) {
      alert('Não é possível excluir uma categoria que possui produtos. Mova ou exclua os produtos primeiro.');
      return;
    }
    
    if (categories.length <= 1) {
      alert('Não é possível excluir a última categoria.');
      return;
    }
    
    if (confirm(`Tem certeza que deseja excluir a categoria "${categoryToDelete}"?`)) {
      deleteCategory(categoryToDelete);
    }
  };

  const handleEditCategory = (categoryToEdit: string) => {
    setEditingCategory(categoryToEdit);
    setNewCategoryName(categoryToEdit);
    setIsEditCategoryModalOpen(true);
  };

  const handleSaveEditCategory = () => {
    const newName = newCategoryName.trim();
    
    if (!newName) return;
    
    if (newName === editingCategory) {
      setIsEditCategoryModalOpen(false);
      setEditingCategory('');
      setNewCategoryName('');
      return;
    }
    
    if (categories.includes(newName)) {
      alert('Esta categoria já existe!');
      return;
    }
    
    updateCategory(editingCategory, newName);
    
    setIsEditCategoryModalOpen(false);
    setEditingCategory('');
    setNewCategoryName('');
  };

  const handleCancelEditCategory = () => {
    setIsEditCategoryModalOpen(false);
    setEditingCategory('');
    setNewCategoryName('');
  };

  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="basis-0 box-border content-stretch flex flex-col gap-[25px] grow items-center justify-start min-h-px min-w-px px-8 py-0 relative shrink-0 w-full">
        {/* Header */}
        <div className="content-stretch flex gap-[15px] items-start justify-start relative shrink-0">
          <button
            onClick={handleExport}
            className="bg-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[50px] shrink-0 hover:bg-[#0d4247] transition-colors"
          >
            <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-none whitespace-pre">Exportar</p>
            </div>
            <Download className="size-4 text-white" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-[#0f4c50] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[50px] shrink-0 hover:bg-[#0d4247] transition-colors">
                <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-none whitespace-pre">Adicionar</p>
                </div>
                <Plus className="size-4 text-white" />
                
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white min-w-[220px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] rounded-[6px] p-1" sideOffset={5}>
              <DropdownMenuItem onClick={handleAddNewCategory} className="cursor-pointer hover:bg-slate-100">
                Adicionar nova categoria
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAddNewProduct} className="cursor-pointer hover:bg-slate-100">
                Adicionar novo produto
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Kanban Columns */}
        <div className="relative shrink-0 w-full">
          {/* Top scroll bar */}
          <div
            ref={topScrollRef}
            onScroll={handleTopScroll}
            className="w-full overflow-x-scroll overflow-y-hidden mb-2 bg-[#f0f0f0] rounded-md"
            style={{ height: '12px', scrollbarWidth: 'auto' }}
          >
            <div 
              ref={topScrollInnerRef}
              style={{ height: '1px', width: contentWidth || '100%' }} 
            />
          </div>

          {/* Main content */}
          <div
            ref={scrollContainerRef}
            onScroll={handleMainScroll}
            className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full overflow-x-auto pt-1"
          >
            {categories.map((category, index) => {
              const categoryProducts = products
                .filter(p => p.category === category)
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
              const canDeleteCategory = categories.length > 1 && categoryProducts.length === 0;
              
              return (
                <DraggableCategoryColumn
                  key={category}
                  title={category}
                  category={category}
                  index={index}
                  products={categoryProducts}
                  onMove={handleMoveProduct}
                  onReorder={handleReorderProducts}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                  onDeleteCategory={canDeleteCategory ? handleDeleteCategory : undefined}
                  onEditCategory={handleEditCategory}
                  canDeleteCategory={canDeleteCategory}
                  onReorderCategory={handleReorderCategories}
                />
              );
            })}
          </div>
        </div>

        {/* Edit Product Modal */}
        <EditProductModal
          product={editingProduct}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveProduct}
          categories={categories}
        />

        {/* Category Modal */}
        <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
          <DialogContent className="bg-[#f9f8f5] max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-['Retrokia:Demo',_sans-serif] text-[#0f4c50] text-[24px]">
                Nova Categoria
              </DialogTitle>
              <DialogDescription className="font-['Rethink_Sans:Regular',_sans-serif] text-[#797474] text-[14px]">
                Digite o nome da nova categoria.
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 py-4">
              <div className="relative">
                <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] mb-2 text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">Nome da categoria</p>
                </div>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#b5b5b5] rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] text-[14px] font-['Open_Sans:Regular',_sans-serif]"
                  placeholder="Ex: Sobremesas"
                />
              </div>
              
              <div className="flex gap-3 justify-end pt-4">
                <button
                  onClick={handleCancelCategory}
                  className="px-6 py-2 border border-[#0f4c50] text-[#0f4c50] rounded-[50px] hover:bg-[#0f4c50] hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveCategory}
                  className="px-6 py-2 bg-[#0f4c50] text-white rounded-[50px] hover:bg-[#0d4247] transition-colors"
                >
                  Criar categoria
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Category Modal */}
        <Dialog open={isEditCategoryModalOpen} onOpenChange={setIsEditCategoryModalOpen}>
          <DialogContent className="bg-[#f9f8f5] max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="font-['Retrokia:Demo',_sans-serif] text-[#0f4c50] text-[24px]">
                Editar Categoria
              </DialogTitle>
              <DialogDescription className="font-['Rethink_Sans:Regular',_sans-serif] text-[#797474] text-[14px]">
                Edite o nome da categoria "{editingCategory}".
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 py-4">
              <div className="relative">
                <div className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] mb-2 text-[13px] text-black tracking-[0.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">Nome da categoria</p>
                </div>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#b5b5b5] rounded-[5px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)] text-[14px] font-['Open_Sans:Regular',_sans-serif]"
                  placeholder="Nome da categoria"
                />
              </div>
              
              <div className="flex gap-3 justify-end pt-4">
                <button
                  onClick={handleCancelEditCategory}
                  className="px-6 py-2 border border-[#0f4c50] text-[#0f4c50] rounded-[50px] hover:bg-[#0f4c50] hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveEditCategory}
                  className="px-6 py-2 bg-[#0f4c50] text-white rounded-[50px] hover:bg-[#0d4247] transition-colors"
                >
                  Salvar alterações
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DndProvider>
  );
}