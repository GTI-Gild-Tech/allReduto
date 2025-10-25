import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';
import axios from 'axios';
import type { Product } from '../cardapio/KanbanComponents';

// ---------- Tipos vindos do backend ----------
type CategoryDTO = { id?: string; category_id?: string | number; name: string; slug?: string };
type ProductDTO = Product; // ajuste se seu backend devolver outro shape

// ---------- Axios base ----------

import { api } from '../../services/api';

// ---------- URL helper ----------
const toPublicUrl = (u?: string | null) => {
  if (!u) return u as any;                       // mantém falsy -> placeholder
  if (/^https?:\/\//i.test(u)) return u;         // já é absoluta
  const base = (api.defaults.baseURL || '').replace(/\/api$/, '');
  const path = u.startsWith('/uploads/') ? u
            : (u.startsWith('uploads/') ? `/${u}` : `/uploads/${u}`);
  return `${base}${path}`;
};

// ---------- Upload helper (se precisar em outro ponto) ----------
async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append('file', file);
  const { data } = await api.post('/uploads', fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data?.url || data?.location || data?.secure_url;
}

// =====================
// NORMALIZAÇÃO DE PREÇO
// =====================

// "1.234,56" | "1234,56" | "1234.56" | 12.5 -> "1234.56"
function normalizeMoneyString(v: unknown, fallback = "0.00"): string {
  if (v == null) return fallback;
  if (typeof v === "number") return (v as number).toString();
  const s = String(v).trim();
  if (!s) return fallback;
  return s.replace(/\./g, "").replace(",", ".");
}

// Normaliza campos de preço dentro de cada size (sem mudar o shape)
function normalizeSizesPrices(sizes: any[] = []): any[] {
  const PRICE_KEYS = [
    "price", "preco", "valor",
    "unit_price", "unitPrice",
    "priceCents", "price_cents", "unit_price_cents", "valor_cents"
  ];

  return sizes.map((s) => {
    const copy: any = { ...s };
    for (const k of PRICE_KEYS) {
      if (copy[k] != null) {
        if (/_cents$/i.test(k) || /Cents$/.test(k)) {
          // se vier "2,50" num campo *_cents, converte para 250
          const n = parseFloat(normalizeMoneyString(copy[k], "0"));
          copy[k] = Number.isFinite(n) ? Math.round(n * 100) : 0;
        } else if (typeof copy[k] === "string") {
          // campos em reais ficam como string com ponto decimal
          copy[k] = normalizeMoneyString(copy[k]);
        }
      }
    }
    return copy;
  });
}

// ---------- Contrato do contexto ----------
type ProductsCtx = {
  products: Product[];
  categories: string[]; // seguimos expondo só os nomes (pra não quebrar nada)
  loading: boolean;
  error: string | null;

  fetchData: () => Promise<void>;

  addProduct: (p: Product, imageFile?: File) => Promise<void>;
  updateProduct: (p: Product, imageFile?: File) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  moveProduct: (id: string, newCategory: string) => Promise<void>;
  reorderProducts: (category: string, productId: string, newIndex: number) => Promise<void>;

  addCategory: (name: string) => Promise<void>;
  updateCategory: (oldName: string, newName: string) => Promise<void>;
  deleteCategory: (name: string) => Promise<void>;
};

const ProductsContext = createContext<ProductsCtx | undefined>(undefined);

const toNumber = (v: unknown) => {
  if (v == null) return null;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : null;
};

// ⚠️ SUBSTITUA o seu mapProductDTO por este:
const mapProductDTO = (dto: any): Product => {
  // 1) obter sizes do jeito que vier (array, string JSON, null…)
  let rawSizes: any = dto.sizes;
  if (!Array.isArray(rawSizes) && typeof rawSizes === "string") {
    try {
      const parsed = JSON.parse(rawSizes);
      if (Array.isArray(parsed)) rawSizes = parsed;
    } catch { /* ignora */ }
  }

  // 2) normalizar cada price para número
  let sizes: { size: string; price: number }[] = [];
  if (Array.isArray(rawSizes)) {
    sizes = rawSizes.map((s: any) => ({
      size: s.size ?? s.label ?? s.name ?? "Único",
      price: toNumber(s.price ?? s.price_cents / 100) ?? 0,
    }));
  }

  // 3) fallback: se não veio sizes, usar preço único
  if (!sizes.length) {
    const pUni = toNumber(dto.uniquePrice ?? dto.price ?? dto.unit_price);
    if (pUni !== null) sizes = [{ size: "Único", price: pUni }];
  }

  return {
    id: String(dto.id ?? dto._id ?? dto.productId ?? dto.product_id),
    name: dto.name,
    category: dto.category,
    description: dto.description,
    sizes,
    imageUrl: toPublicUrl(dto.imageUrl),
    order: dto.order ?? 0,
  };
};
// ---------- Provider ----------
export const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // name -> id
  const [categoryByName, setCategoryByName] = useState<Record<string, string>>({});

  // ---------- Helpers de estado ----------
  const replaceProduct = useCallback((p: Product) => {
    setProducts(prev => prev.map(x => (x.id === p.id ? p : x)));
  }, []);

  const replaceOrInsertProduct = useCallback((p: Product, tempId?: string) => {
    setProducts(prev => {
      const byFinalIdIdx = prev.findIndex(x => x.id === p.id);
      if (byFinalIdIdx >= 0) {
        const clone = prev.slice();
        clone[byFinalIdIdx] = p;
        return clone;
      }
      if (tempId) {
        const byTempIdx = prev.findIndex(x => x.id === tempId);
        if (byTempIdx >= 0) {
          const clone = prev.slice();
          clone[byTempIdx] = p;
          return clone;
        }
      }
      return [p, ...prev];
    });
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts(prev => prev.filter(x => x.id !== id));
  }, []);

  const addProductLocal = useCallback((p: Product) => {
    setProducts(prev => [p, ...prev]);
  }, []);

  // ---------- Hidratar dados ----------
  const fetchData: () => Promise<void> = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [prodRes, catRes] = await Promise.all([
        api.get('/products'),
        api.get('/categories'),
      ]);

      // produtos
      setProducts((prodRes.data as any[]).map(mapProductDTO));

      // categorias: guardamos nomes (pra UI) e mapeamos name -> id (pra API)
      const rawCats = (catRes.data as any[]) as CategoryDTO[];
      const catsNormalized = rawCats.map((c) => {
        const id = String(
          c.id ??
          (c as any).category_id ??
          (c as any).CategoryId ??
          (c as any).CategoryID
        );
        const name = (c.name ??
          (c as any).title ??
          (c as any).slug ??
          String(c)) as string;

        return { id, name };
      });

      setCategories(catsNormalized.map((c) => c.name));
      setCategoryByName(
        Object.fromEntries(catsNormalized.map((c) => [c.name, c.id]))
      );
    } catch (e: any) {
      setError(e?.response?.data?.message ?? e?.message ?? 'Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const clearJsonHeaders = () => {
    try {
      delete (api.defaults.headers as any).post?.['Content-Type'];
      delete (api.defaults.headers as any).put?.['Content-Type'];
    } catch {}
  };

  // ---------- Ações em Produto ----------
  const addProductFn = useCallback(
    async (p: Product, imageFile?: File) => {
      const tempId = p.id || crypto.randomUUID();
      const tempUrl = imageFile ? URL.createObjectURL(imageFile) : undefined;

      // otimista
      addProductLocal({ ...p, id: String(tempId), imageUrl: p.imageUrl ?? tempUrl });

      try {
        // NORMALIZAÇÕES DE PREÇO (vírgula → ponto, cents quando aplicável)
        const uniquePriceNorm = normalizeMoneyString((p as any).uniquePrice, "0.00");
        const sizesNorm = normalizeSizesPrices(p.sizes || []);

        if (imageFile) {
          // ENVIA COMO FORMDATA (com arquivo)
          clearJsonHeaders();
          const fd = new FormData();
          fd.append('name', p.name);
          fd.append('category', p.category);
          fd.append('description', p.description ?? '');
          fd.append('uniquePrice', uniquePriceNorm); // "12.50"
          fd.append('sizes', JSON.stringify(sizesNorm));
          fd.append('stock_qty', String((p as any).stock_qty ?? 0));
          fd.append('active', String((p as any).active ?? 1));
          fd.append('file', imageFile);

          const { data } = await api.post('/products', fd, { headers: {} });
          replaceOrInsertProduct(mapProductDTO(data), String(tempId));
        } else {
          // SEM arquivo: JSON
          const payload = {
            name: p.name,
            category: p.category,
            description: p.description ?? '',
            uniquePrice: uniquePriceNorm,
            sizes: sizesNorm,
            stock_qty: (p as any).stock_qty ?? 0,
            active: (p as any).active ?? 1,
            imageUrl: p.imageUrl ?? null,
          };
          const { data } = await api.post('/products', payload);
          replaceOrInsertProduct(mapProductDTO(data), String(tempId));
        }
      } catch (e) {
        removeProduct(String(tempId)); // rollback
        throw e;
      } finally {
        if (tempUrl) URL.revokeObjectURL(tempUrl);
      }
    },
    [addProductLocal, removeProduct, replaceOrInsertProduct]
  );

  const updateProductFn = useCallback(
    async (p: Product, imageFile?: File) => {
      const prev = products.find(x => x.id === p.id);
      if (!prev) return;

      replaceProduct(p); // otimista

      try {
        // NORMALIZAÇÕES DE PREÇO
        const uniquePriceNorm = normalizeMoneyString((p as any).uniquePrice, "0.00");
        const sizesNorm = normalizeSizesPrices(p.sizes || []);

        if (imageFile) {
          // FORMDATA (com arquivo)
          clearJsonHeaders();
          const fd = new FormData();
          fd.append('name', p.name);
          if (p.description != null) fd.append('description', p.description);
          fd.append('category', p.category);
          fd.append('uniquePrice', uniquePriceNorm);
          fd.append('sizes', JSON.stringify(sizesNorm));
          fd.append('stock_qty', String((p as any).stock_qty ?? 0));
          fd.append('active', String((p as any).active ?? 1));
          fd.append('file', imageFile);

          const { data } = await api.put(`/products/${p.id}`, fd, { headers: {} });
          replaceProduct(mapProductDTO(data));
        } else {
          // JSON (sem arquivo)
          const payload: any = {
            name: p.name,
            description: p.description ?? '',
            category: p.category,
            uniquePrice: uniquePriceNorm,
            sizes: sizesNorm,
            stock_qty: (p as any).stock_qty ?? 0,
            active: (p as any).active ?? 1,
            imageUrl: p.imageUrl ?? null,
          };
          const { data } = await api.put(`/products/${p.id}`, payload);
          replaceProduct(mapProductDTO(data));
        }
      } catch (e) {
        replaceProduct(prev); // rollback
        throw e;
      }
    },
    [products, replaceProduct]
  );

  console.log('[ProductsContext] baseURL =', api.defaults.baseURL);

  const deleteProductFn: (id: string) => Promise<void> = useCallback(
    async (id) => {
      const snapshot = products;
      removeProduct(id); // otimista
      try {
        await api.delete(`/products/${id}`);
      } catch (e) {
        setProducts(snapshot); // rollback
        throw e;
      }
    },
    [products, removeProduct]
  );

  const moveProductFn: (id: string, newCategory: string) => Promise<void> =
    useCallback(
      async (id, newCategory) => {
        console.log('moveProductFn called:', { id, newCategory });
        const prev = products.find((x) => x.id === id);
        if (!prev) {
          console.log('Product not found:', id);
          return;
        }

        console.log('Moving product:', prev.name, 'from', prev.category, 'to', newCategory);
        const optimistic: Product = { ...prev, category: newCategory };
        replaceProduct(optimistic);

        try {
          console.log('Calling API PATCH /products/' + id, { category: newCategory });
          const response = await api.patch(`/products/${id}`, { category: newCategory });
          console.log('API response:', response.data);
          
          // Atualiza com os dados retornados da API
          if (response.data) {
            const updatedProduct = mapProductDTO(response.data);
            console.log('Updated product from API:', updatedProduct);
            replaceProduct(updatedProduct);
          }
        } catch (e) {
          console.error('Error moving product:', e);
          replaceProduct(prev); // rollback
          throw e;
        }
      },
      [products, replaceProduct]
    );

  // ---------- Ações em Categoria ----------
  const addCategoryFn: (name: string) => Promise<void> = useCallback(
    async (name) => {
      if (!name) return;
      if (!categories.includes(name)) {
        setCategories((prev) => [...prev, name]); // otimista
      }
      try {
        await api.post('/categories', { name });
        await fetchData(); // pega o id recém-criado e atualiza o mapa
      } catch (e) {
        setCategories((prev) => prev.filter((c) => c !== name)); // rollback
        throw e;
      }
    },
    [categories, fetchData]
  );

  const updateCategoryFn: (oldName: string, newName: string) => Promise<void> =
    useCallback(
      async (oldName, newName) => {
        const prevCats = categories;
        const prevProds = products;

        // otimista: renomeia e faz cascade visual
        setCategories((prev) =>
          prev.map((c) => (c === oldName ? newName : c))
        );
        setProducts((prev) =>
          prev.map((p) => (p.category === oldName ? { ...p, category: newName } : p))
        );

        try {
          // resolve id pelo nome
          let id = categoryByName[oldName];
          if (!id) {
            await fetchData(); // tenta refrescar
            id = categoryByName[oldName];
          }
          if (!id) throw new Error('Categoria não encontrada para atualizar.');

          await api.put(`/categories/${encodeURIComponent(id)}`, { name: newName });

          // atualiza o mapa localmente
          setCategoryByName((m) => {
            const clone = { ...m };
            const foundId = clone[oldName];
            if (foundId) {
              delete clone[oldName];
              clone[newName] = foundId;
            }
            return clone;
          });
        } catch (e) {
          setCategories(prevCats); // rollback
          setProducts(prevProds);
          throw e;
        }
      },
      [categories, products, categoryByName, fetchData]
    );

  const reorderProductsFn: (category: string, productId: string, newIndex: number) => Promise<void> =
    useCallback(
      async (category, productId, newIndex) => {
        console.log('[reorderProductsFn] Reordering:', { category, productId, newIndex });
        
        // Snapshot do estado atual para rollback
        const snapshot = products.slice();
        
        const categoryProducts = products
          .filter((p) => p.category === category)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        
        const productIndex = categoryProducts.findIndex((p) => p.id === productId);
        if (productIndex === -1) {
          console.warn('[reorderProductsFn] Product not found in category');
          return;
        }
        
        // Se a posição não mudou, não fazer nada
        if (productIndex === newIndex) {
          console.log('[reorderProductsFn] No change in position');
          return;
        }
        
        // Reordenar localmente (otimista)
        const [movedProduct] = categoryProducts.splice(productIndex, 1);
        categoryProducts.splice(newIndex, 0, movedProduct);
        
        // Atualizar os índices de ordem
        const updatedProducts = categoryProducts.map((p, idx) => ({
          ...p,
          order: idx
        }));
        
        // Atualizar estado local IMEDIATAMENTE
        setProducts((prev) => {
          const otherProducts = prev.filter((p) => p.category !== category);
          return [...otherProducts, ...updatedProducts];
        });
        
        try {
          // Enviar a nova ordem para o backend
          const response = await api.patch(`/products/${productId}/reorder`, { 
            category,
            newOrder: newIndex 
          });
          
          console.log('[reorderProductsFn] Backend response:', response.data);
          
          // Atualizar com os dados do backend para garantir consistência
          if (response.data) {
            const updatedProduct = mapProductDTO(response.data);
            setProducts((prev) => 
              prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
            );
          }
        } catch (e) {
          console.error('[reorderProductsFn] Error:', e);
          // Rollback para o snapshot
          setProducts(snapshot);
          throw e;
        }
      },
      [products]
    );

  const deleteCategoryFn: (name: string) => Promise<void> = useCallback(
    async (name) => {
      const prevCats = categories;
      setCategories((prev) => prev.filter((c) => c !== name)); // otimista
      try {
        // resolve id pelo nome
        let id = categoryByName[name];
        if (!id) {
          await fetchData(); // tenta refrescar
          id = categoryByName[name];
        }
        if (!id) throw new Error('Categoria não encontrada para exclusão.');

        await api.delete(`/categories/${encodeURIComponent(id)}`);
        await fetchData(); // re-sync opcional
      } catch (e) {
        setCategories(prevCats); // rollback
        throw e;
      }
    },
    [categories, categoryByName, fetchData]
  );

  // ---------- Value memoizado ----------
  const value: ProductsCtx = useMemo(
    () => ({
      products,
      categories,
      loading,
      error,

      fetchData,

      addProduct: addProductFn,
      updateProduct: updateProductFn,
      deleteProduct: deleteProductFn,
      moveProduct: moveProductFn,
      reorderProducts: reorderProductsFn,

      addCategory: addCategoryFn,
      updateCategory: updateCategoryFn,
      deleteCategory: deleteCategoryFn,
    }),
    [
      products,
      categories,
      loading,
      error,
      fetchData,
      addProductFn,
      updateProductFn,
      deleteProductFn,
      moveProductFn,
      reorderProductsFn,
      addCategoryFn,
      updateCategoryFn,
      deleteCategoryFn,
    ]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// ---------- Hook de consumo ----------
export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return ctx;
};