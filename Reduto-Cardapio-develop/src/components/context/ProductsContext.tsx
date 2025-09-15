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
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api',
});

// ---------- URL helper (novo) ----------
const toPublicUrl = (u?: string | null) => {
  if (!u) return u as any;                       // mantém falsy -> placeholder
  if (/^https?:\/\//i.test(u)) return u;         // já é absoluta
  const base = (api.defaults.baseURL || '').replace(/\/api$/, '');
  // normaliza quando vem "arquivo.png" ou "uploads/arquivo.png"
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

// ---------- Contrato do contexto ----------
type ProductsCtx = {
  products: Product[];
  categories: string[]; // seguimos expondo só os nomes (pra não quebrar nada)
  loading: boolean;
  error: string | null;

  fetchData: () => Promise<void>;

  addProduct: (p: Product, imageFile?: File) => Promise<void>;
  updateProduct: (p: Product, imageFile?: File) => Promise<void>; // <- aceita imageFile
  deleteProduct: (id: string) => Promise<void>;
  moveProduct: (id: string, newCategory: string) => Promise<void>;

  addCategory: (name: string) => Promise<void>;
  updateCategory: (oldName: string, newName: string) => Promise<void>;
  deleteCategory: (name: string) => Promise<void>;
};

const ProductsContext = createContext<ProductsCtx | undefined>(undefined);

// helper de normalização: garante que sempre haja um "id" válido
const mapProductDTO = (dto: any): Product => ({
  id: String(dto.id ?? dto._id ?? dto.productId ?? dto.product_id),
  name: dto.name,
  category: dto.category,
  description: dto.description,
  sizes: Array.isArray(dto.sizes) ? dto.sizes : [],
  imageUrl: toPublicUrl(dto.imageUrl), // <- normaliza aqui
});

// ---------- Provider ----------
export const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // NEW: mapa name -> id pra falar com o backend usando id
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
        if (imageFile) {
          // ENVIA COMO FORMDATA (com arquivo)
          clearJsonHeaders();
          const fd = new FormData();
          fd.append('name', p.name);
          fd.append('category', p.category);
          fd.append('description', p.description ?? '');
          fd.append('uniquePrice', String((p as any).uniquePrice ?? '0.00')); // NOT NULL no banco
          fd.append('sizes', JSON.stringify(p.sizes || []));
          fd.append('stock_qty', String((p as any).stock_qty ?? 0));
          fd.append('active', String((p as any).active ?? 1));
          fd.append('file', imageFile);
          const { data } = await api.post('/products', fd, { headers: {} }); // não forçar Content-Type
          replaceOrInsertProduct(mapProductDTO(data), String(tempId));
        } else {
          // SEM arquivo: pode mandar JSON
          const payload = {
            name: p.name,
            category: p.category,
            description: p.description ?? '',
            uniquePrice: String((p as any).uniquePrice ?? '0.00'),
            sizes: p.sizes || [],
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
        if (imageFile) {
          // FORMDATA (com arquivo)
          clearJsonHeaders();
          const fd = new FormData();
          fd.append('name', p.name);
          if (p.description != null) fd.append('description', p.description);
          fd.append('category', p.category);
          fd.append('uniquePrice', String((p as any).uniquePrice ?? '0.00'));
          fd.append('sizes', JSON.stringify(p.sizes || []));
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
            uniquePrice: String((p as any).uniquePrice ?? '0.00'),
            sizes: p.sizes || [],
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
        const prev = products.find((x) => x.id === id);
        if (!prev) return;

        const optimistic: Product = { ...prev, category: newCategory };
        replaceProduct(optimistic);

        try {
          await api.patch(`/products/${id}`, { category: newCategory });
        } catch (e) {
          replaceProduct(prev); // rollback
          throw e;
        }
      },
      [products, replaceProduct]
    );

  // ---------- Ações em Categoria ----------
  const addCategoryFn: (name: string) => Promise<void> = useCallback(
    async (name) => {
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